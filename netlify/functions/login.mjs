import { json, checkAdmin } from "../lib/auth.mjs";

export default async (req, context) => {
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);
  const r = await checkAdmin(req, context);
  return r.ok ? json({ ok: true }) : json({ error: r.error }, r.status);
};

export const config = { path: "/api/login" };
