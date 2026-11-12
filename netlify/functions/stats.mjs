import { getStore } from "@netlify/blobs";

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" },
  });

export default async (req) => {
  const store = getStore("stats");
  const read = async () => {
    const v = await store.get("counters", { type: "json" });
    return { visits: Number(v?.visits) || 0, inquiries: Number(v?.inquiries) || 0 };
  };

  if (req.method === "GET") return json(await read());

  if (req.method === "POST") {
    let body;
    try { body = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
    const field = body.type === "visit" ? "visits" : body.type === "inquiry" ? "inquiries" : null;
    if (!field) return json({ error: "invalid" }, 400);
    const c = await read();
    c[field] += 1;
    await store.setJSON("counters", c);
    return json(c);
  }

  return json({ error: "method_not_allowed" }, 405);
};

export const config = { path: "/api/stats" };
