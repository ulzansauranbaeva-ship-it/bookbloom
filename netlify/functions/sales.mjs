import { getStore } from "@netlify/blobs";
import { json, clean, checkAdmin } from "../lib/auth.mjs";

const METHODS = ["kaspi_pay", "kaspi_transfer", "cash", "other"];
const ID_RE = /^[A-Za-z0-9_-]{1,40}$/;

export default async (req, context) => {
  const store = getStore("sales");
  const url = new URL(req.url);

  if (req.method === "GET") {
    const { blobs } = await store.list();
    const items = (await Promise.all(blobs.map((b) => store.get(b.key, { type: "json" })))).filter(Boolean);
    items.sort((a, b) => String(b.confirmed_at).localeCompare(String(a.confirmed_at)));

    // Продавец (с верным паролем) видит все поля. Остальные посетители - только
    // публичные: книга, дата, сумма и номер заказа. Инициалы и способ оплаты скрыты.
    if (req.headers.get("x-admin-key")) {
      const auth = await checkAdmin(req, context);
      if (!auth.ok) return json({ error: auth.error }, auth.status);
      return json(items);
    }
    return json(items.map(({ bookId, price, date, orderNumber }) => ({ bookId, price, date, orderNumber })));
  }

  const auth = await checkAdmin(req, context);
  if (!auth.ok) return json({ error: auth.error }, auth.status);

  if (req.method === "POST") {
    let b;
    try { b = await req.json(); } catch { return json({ error: "bad_json" }, 400); }
    const bookId = String(b.bookId ?? "");
    const price = Number(b.price);
    const date = String(b.date ?? "");
    if (!ID_RE.test(bookId) || !Number.isFinite(price) || price < 0 || price > 1000000 || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return json({ error: "invalid" }, 400);
    }
    const sale = {
      bookId, price, date,
      paymentMethod: METHODS.includes(b.paymentMethod) ? b.paymentMethod : "other",
      buyerInitials: clean(b.buyerInitials, 30),
      orderNumber: clean(b.orderNumber, 30),
      confirmed_at: new Date().toISOString(),
    };
    await store.setJSON(bookId, sale);
    return json(sale, 201);
  }

  if (req.method === "DELETE") {
    const bookId = url.searchParams.get("bookId") || "";
    if (!ID_RE.test(bookId)) return json({ error: "invalid" }, 400);
    await store.delete(bookId);
    const files = getStore("attachments");
    const { blobs } = await files.list({ prefix: bookId + "/" });
    await Promise.all(blobs.map((x) => files.delete(x.key)));
    return json({ ok: true });
  }

  return json({ error: "method_not_allowed" }, 405);
};

export const config = { path: "/api/sales" };
