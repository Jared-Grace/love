import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function calendar_db_waiting_expire(db, now_iso) {
  arguments_assert(arguments, 2);
  ("Cancels every meeting still waiting for its code 24 hours after it was booked, so its hour opens again; answers how many were cancelled. Run before anything reads or books, so no answer counts an hour a stranger is only holding.");
  ("★ 24 HOURS FROM BOOKING, PICKED 2026-11-13. Rejected: 6 hours (a host who reads WhatsApp once a day loses guests who did send the code); until shortly before the meeting (one unproven number could hold an hour for up to 14 days).");
  let left = Date.parse(now_iso);
  let left2 = multiply(24, 60);
  let left3 = multiply(left2, 60);
  let right = multiply(left3, 1000);
  let difference = subtract(left, right);
  let cutoff = new Date(difference).toISOString();
  let written = await db
    .prepare(
      "UPDATE meetings SET cancelled_at = ?1 WHERE cancelled_at IS NULL AND confirmed_at IS NULL AND created_at < ?2",
    )
    .bind(now_iso, cutoff)
    .run();
  let r = written.meta.changes;
  return r;
}
