import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_openings_free } from "./calendar_openings_free.mjs";
export async function calendar_db_book(
  db,
  slug,
  guest_uid,
  day,
  start_minute,
  weekly,
  now_iso,
  id,
) {
  arguments_assert(arguments, 8);
  ("Books guest_uid with the host whose booking link is slug, on the host's own day and minute, once or every week from then on; answers {ok, reason, start_utc}. db is a Cloudflare D1 database, or anything answering the same prepare, bind, first, all and run.");
  ("The hour must be one the host still offers - inside their openings, 24 hours to 14 days ahead, not held - which is asked of the same list the guest was shown, so the page and the booking cannot disagree about what is open.");
  ("★ THE CLASH CHECK AND THE WRITE ARE ONE STATEMENT. Checking first and writing after lets two guests both pass the check; an INSERT that only writes when no clashing meeting exists cannot be split, and the unique indexes back it up. The clashes: the same day, an earlier weekly meeting reaching this day, or - for a weekly booking - any meeting on this weekday at or after its first day.");
  let host_row = await db
    .prepare(
      "SELECT hosts.uid, hosts.block_minutes, hosts.meeting_minutes, people.timezone FROM hosts JOIN people ON people.uid = hosts.uid WHERE hosts.slug = ?",
    )
    .bind(slug)
    .first();
  if (equal(host_row, null)) {
    let r = {
      ok: false,
      reason: "no_host",
      start_utc: null,
    };
    return r;
  }
  let host_uid = host_row.uid;
  let openings_read = await db
    .prepare(
      "SELECT weekday, start_minute, end_minute FROM openings WHERE host_uid = ?",
    )
    .bind(host_uid)
    .all();
  let meetings_read = await db
    .prepare(
      "SELECT day, weekday, start_minute, weekly, cancelled_at FROM meetings WHERE host_uid = ? AND cancelled_at IS NULL",
    )
    .bind(host_uid)
    .all();
  let slots = calendar_openings_free(
    host_row,
    openings_read.results,
    meetings_read.results,
    now_iso,
  );
  function lambda(s) {
    let r2 = equal(s.day, day) && equal(s.start_minute, start_minute);
    return r2;
  }
  let chosen = slots.find(lambda);
  if (equal(chosen, undefined)) {
    let r3 = {
      ok: false,
      reason: "not_open",
      start_utc: null,
    };
    return r3;
  }
  let weekly_number = weekly ? 1 : 0;
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
      OR (?8 = 1 AND weekday = ?6 AND day >= ?5)))`,
      )
      .bind(
        id,
        host_uid,
        guest_uid,
        host_row.timezone,
        day,
        weekday,
        start_minute,
        weekly_number,
        now_iso,
      )
      .run();
  } catch (e) {
    let b = String(e.message).includes("UNIQUE");
    if (not(b)) {
      throw e;
    }
  }
  if (equal(written, null) || not_equal(written.meta.changes, 1)) {
    let r4 = {
      ok: false,
      reason: "taken",
      start_utc: null,
    };
    return r4;
  }
  let r5 = {
    ok: true,
    reason: null,
    start_utc: chosen.start_utc,
  };
  return r5;
}
