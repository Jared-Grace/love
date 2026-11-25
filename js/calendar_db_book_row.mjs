import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export async function calendar_db_book_row(
  db,
  id,
  host_uid,
  guest_uid,
  host_timezone,
  day,
  start_minute,
  weekly,
  now_iso,
  max_per_day,
) {
  arguments_assert(arguments, 10);
  ("Writes one meeting row - once on day, or every week from it when weekly is 1 - and answers whether it was written. max_per_day is the host's cap to check on that day, or null to skip it.");
  ("★ THE CLASH CHECK AND THE WRITE ARE ONE STATEMENT. Checking first and writing after lets two guests both pass the check; an INSERT that only writes when no clashing meeting exists cannot be split, and the unique indexes back it up. The clashes: the same day, an earlier weekly meeting reaching this day, or - for a weekly row - any meeting on this weekday at or after its first day. The cap is counted in the same statement, so two guests taking the last place of a day cannot both get it.");
  let weekday = new Date(day + "T00:00:00Z").getUTCDay();
  let written = null;
  try {
    written = await db
      .prepare(
        `INSERT INTO meetings (id, host_uid, guest_uid, host_timezone, day, weekday, start_minute, weekly, created_at)
SELECT ?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8, ?9
WHERE NOT EXISTS (
  SELECT 1 FROM meetings
  WHERE host_uid = ?2 AND cancelled_at IS NULL AND start_minute = ?7
    AND (day = ?5
      OR (weekly = 1 AND weekday = ?6 AND day <= ?5)
      OR (?8 = 1 AND weekday = ?6 AND day >= ?5)))
  AND (?10 IS NULL OR (
    SELECT COUNT(*) FROM meetings
    WHERE host_uid = ?2 AND cancelled_at IS NULL
      AND (day = ?5 OR (weekly = 1 AND weekday = ?6 AND day <= ?5))) < ?10)`,
      )
      .bind(
        id,
        host_uid,
        guest_uid,
        host_timezone,
        day,
        weekday,
        start_minute,
        weekly,
        now_iso,
        max_per_day,
      )
      .run();
  } catch (e) {
    let b = String(e.message).includes("UNIQUE");
    if (not(b)) {
      throw e;
    }
  }
  let b2 = equal(written, null);
  let r = not(b2) && equal(written.meta.changes, 1);
  return r;
}
