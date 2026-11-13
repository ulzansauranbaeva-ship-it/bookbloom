import { getStore } from "@netlify/blobs";
import { json, clean, checkAdmin } from "../lib/auth.mjs";

// Файлы (переписка, чеки) видны ТОЛЬКО продавцу после ввода пароля.
const ALLOWED = ["application/pdf", "image/png", "image/jpeg", "image/webp"];
const MAX_BYTES = 5 * 1024 * 1024;
const ID_RE = /^[A-Za-z0-9_-]{1,40}$/;

export default async (req, context) => {
  const auth = await checkAdmin(req, context);
  if (!auth.ok) return json({ error: auth.error }, auth.status);

  const store = getStore("attachments");
  const url = new URL(req.url);

  if (req.method === "GET") {
    const id = url.searchParams.get("id");
    if (id) {
      if (!/^[A-Za-z0-9_-]{1,40}\/[A-Za-z0-9_-]{1,60}$/.test(id)) return json({ error: "invalid" }, 400);
      const r = await store.getWithMetadata(id, { type: "arrayBuffer" });
      if (!r) return json({ error: "not_found" }, 404);
      const m = r.metadata || {};
      return new Response(r.data, {
        headers: {
          "Content-Type": ALLOWED.includes(m.type) ? m.type : "application/octet-stream",
          "Content-Disposition": "inline; filename*=UTF-8''" + encodeURIComponent(m.name || "file"),
          "Cache-Control": "no-store",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }
    const bookId = url.searchParams.get("bookId") || "";
    if (!ID_RE.test(bookId)) return json({ error: "invalid" }, 400);
    const { blobs } = await store.list({ prefix: bookId + "/" });
    const items = await Promise.all(
      blobs.map(async (b) => {
        const meta = await store.getMetadata(b.key);
        const m = (meta && meta.metadata) || {};
        return { id: b.key, name: m.name || "файл", type: m.type || "", size: Number(m.size) || 0, created: m.created || "" };
      })
    );
    items.sort((a, b) => String(a.created).localeCompare(String(b.created)));
    return json(items);
  }

  if (req.method === "POST") {
    const bookId = url.searchParams.get("bookId") || "";
    if (!ID_RE.test(bookId)) return json({ error: "invalid" }, 400);
    const type = (req.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
    if (!ALLOWED.includes(type)) return json({ error: "bad_type" }, 415);
    const buf = await req.arrayBuffer();
    if (buf.byteLength === 0 || buf.byteLength > MAX_BYTES) return json({ error: "bad_size" }, 413);
    let name = "файл";
    try { name = clean(decodeURIComponent(req.headers.get("x-file-name") || ""), 120) || "файл"; } catch {}
    const id = `${bookId}/${String(Date.now()).padStart(15, "0")}-${crypto.randomUUID().slice(0, 8)}`;
    const created = new Date().toISOString();
    await store.set(id, buf, { metadata: { name, type, size: buf.byteLength, created } });
    return json({ id, name, type, size: buf.byteLength, created }, 201);
  }

  if (req.method === "DELETE") {
    const id = url.searchParams.get("id") || "";
    if (!/^[A-Za-z0-9_-]{1,40}\/[A-Za-z0-9_-]{1,60}$/.test(id)) return json({ error: "invalid" }, 400);
    await store.delete(id);
    return json({ ok: true });
  }

  return json({ error: "method_not_allowed" }, 405);
};

export const config = { path: "/api/attachments" };
