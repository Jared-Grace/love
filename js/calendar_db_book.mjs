import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_db_host_free } from "./calendar_db_host_free.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
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
  ("The hour must be one the host still offers - inside their openings, 23 hours to 14 days ahead, not held - which is asked of the same list the guest was shown, so the page and the booking cannot disagree about what is open.");
  ("★ THE CLASH CHECK AND THE WRITE ARE ONE STATEMENT. Checking first and writing after lets two guests both pass the check; an INSERT that only writes when no clashing meeting exists cannot be split, and the unique indexes back it up. The clashes: the same day, an earlier weekly meeting reaching this day, or - for a weekly booking - any meeting on this weekday at or after its first day.");
  ("★ A BOOKING ACCEPTS AN HOUR 23 HOURS AHEAD, THOUGH THE PAGE SHOWS ONLY 24. A guest who opens the page, takes a while to choose, then presses Book would otherwise be told the hour they were shown is gone. The hour of grace is the time to choose; 23.5 was rejected as too little for someone slow or on a weak connection, and anything under about 20 starts letting a guest book closer than the host was promised.");
  let free = await calendar_db_host_free(db, slug, now_iso, 23);
  let host_row = free.host;
  if (equal(host_row, null)) {
    let r = {
      ok: false,
      reason: "no_host",
      start_utc: null,
    };
    return r;
  }
  let host_uid = host_row.uid;
  let slots = free.slots;
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
