import { getStore } from "@netlify/blobs";
import { createHash, timingSafeEqual } from "node:crypto";

export const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

export const clean = (v, max) =>
  String(v ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);

const sha = (s) => createHash("sha256").update(String(s)).digest();

// Проверка пароля продавца (переменная ADMIN_KEY в настройках Netlify).
// После 8 неверных попыток подряд вход блокируется на 10 минут.
export async function checkAdmin(req, context) {
  const key = process.env.ADMIN_KEY;
  if (!key) return { ok: false, status: 503, error: "admin_key_not_set" };

  const ip = String(context?.ip || req.headers.get("x-nf-client-connection-ip") || "unknown")
    .replace(/[^a-zA-Z0-9]/g, "_");
  const limits = getStore("limits");
  const name = "fail_" + ip;
  const now = Date.now();
  const WINDOW = 10 * 60 * 1000;
  const rec = (await limits.get(name, { type: "json" })) || { count: 0, first: 0 };

  if (rec.count >= 8 && now - rec.first < WINDOW) return { ok: false, status: 429, error: "too_many_attempts" };

  const given = req.headers.get("x-admin-key") || "";
  if (timingSafeEqual(sha(given), sha(key))) {
    if (rec.count) await limits.delete(name);
    return { ok: true };
  }
  const fresh = now - rec.first > WINDOW;
  await limits.setJSON(name, { count: fresh ? 1 : rec.count + 1, first: fresh ? now : rec.first });
  return { ok: false, status: 403, error: "forbidden" };
}
