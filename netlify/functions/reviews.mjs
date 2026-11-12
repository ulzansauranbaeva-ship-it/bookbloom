import { getStore } from "@netlify/blobs";

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

const clean = (v, max) =>
  String(v ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);

export default async (req, context) => {
  const store = getStore("reviews");

  if (req.method === "GET") {
    const { blobs } = await store.list();
    const keys = blobs.map((b) => b.key).sort().slice(-60);
    const items = await Promise.all(
      keys.map(async (key) => {
        const r = await store.get(key, { type: "json" });
        return r ? { id: key, ...r } : null;
      })
    );
    return json(items.filter(Boolean));
  }

  if (req.method === "POST") {
    let body;
    try { body = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
    const name = clean(body.name, 60);
    const text = clean(body.text, 1000);
    const rating = Number.parseInt(body.rating, 10);
    if (!name || !text || !(rating >= 1 && rating <= 5)) return json({ error: "invalid" }, 400);

    // не чаще одного отзыва в 30 секунд с одного адреса
    const ip = String(context?.ip || req.headers.get("x-nf-client-connection-ip") || "unknown");
    const limits = getStore("limits");
    const limitKey = ip.replace(/[^a-zA-Z0-9]/g, "_");
    const last = Number(await limits.get(limitKey, { type: "json" })) || 0;
    if (Date.now() - last < 30000) return json({ error: "too_fast" }, 429);
    await limits.setJSON(limitKey, Date.now());

    const key = `${String(Date.now()).padStart(15, "0")}-${crypto.randomUUID().slice(0, 8)}`;
    const review = { name, text, rating, created_at: new Date().toISOString() };
    await store.setJSON(key, review);
    return json({ id: key, ...review }, 201);
  }

  if (req.method === "DELETE") {
    const admin = process.env.ADMIN_KEY;
    if (!admin || req.headers.get("x-admin-key") !== admin) return json({ error: "forbidden" }, 403);
    const id = new URL(req.url).searchParams.get("id");
    if (!id) return json({ error: "no_id" }, 400);
    await store.delete(id);
    return json({ ok: true });
  }

  return json({ error: "method_not_allowed" }, 405);
};

export const config = { path: "/api/reviews" };
