import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { calendar_meeting_next_utc } from "./calendar_meeting_next_utc.mjs";
import { not } from "./not.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { calendar_db_person_write } from "./calendar_db_person_write.mjs";
import { calendar_db_person_save } from "./calendar_db_person_save.mjs";
import { calendar_db_book } from "./calendar_db_book.mjs";
import { calendar_db_person_delete } from "./calendar_db_person_delete.mjs";
export async function calendar_db_guest_book(
  db,
  uid,
  slug,
  name,
  whatsapp,
  timezone,
  day,
  start_minute,
  weekly,
  now_iso,
  id,
  via,
) {
  arguments_assert(arguments, 12);
  ("via is whatsapp or messenger. ★ A MESSENGER BOOKING TAKES NO NUMBER AND KEEPS ANY NUMBER ALREADY GIVEN: whatsapp is ignored, a new guest is written with empty text, and a returning guest's number stays as it was, since their WhatsApp meetings are confirmed by it. The 2-meeting limit counts numbers, so it does not reach a Messenger booking; the robot check, the rate limit and the 24 hours a waiting booking lasts still do.");
  let messenger = equal(via, "messenger");
  ("A guest who has not signed in books with the host at slug: writes who they are under uid (new, or the one their private link already names), then books; answers {ok, reason, start_utc}. Reasons: whatsapp, timezone, limit, and the booking's own no_host, not_open, taken.");
  ("★ ONE WHATSAPP NUMBER HOLDS AT MOST 2 UPCOMING MEETINGS WITH ONE HOST. Nobody proves the number is theirs, so this is what keeps one person from filling a host's week; numbers are compared by their digits alone, so spacing and a leading + do not make a second number.");
  ("★ A GUEST WHO WAS NOT THERE BEFORE IS REMOVED AGAIN WHEN THE BOOKING FAILS, so a refused booking leaves no name or number behind.");
  let limit = 2;
  let digits = String(whatsapp).replace(/[^0-9]/g, "");
  let held = await db
    .prepare(
      `SELECT m.day, m.weekday, m.start_minute, m.weekly, m.host_timezone, p.whatsapp
FROM meetings m JOIN hosts h ON h.uid = m.host_uid JOIN people p ON p.uid = m.guest_uid
WHERE h.slug = ?1 AND m.cancelled_at IS NULL`,
    )
    .bind(slug)
    .all();
  function lambda(m) {
    let left = String(m.whatsapp).replace(/[^0-9]/g, "");
    let r =
      equal(left, digits) &&
      not_equal(calendar_meeting_next_utc(m, now_iso), null);
    return r;
  }
  let upcoming = held.results.filter(lambda);
  if (not(messenger) && greater_than_equal(upcoming.length, limit)) {
    let r2 = {
      ok: false,
      reason: "limit",
      start_utc: null,
    };
    return r2;
  }
  let before = await db
    .prepare("SELECT whatsapp FROM people WHERE uid = ?1")
    .bind(uid)
    .first();
  let saved = messenger
    ? await calendar_db_person_write(
        db,
        uid,
        name,
        equal(before, null) ? "" : before.whatsapp,
        timezone,
        now_iso,
      )
    : await calendar_db_person_save(db, uid, name, whatsapp, timezone, now_iso);
  if (not(saved.ok)) {
    let r3 = {
      ok: false,
      reason: saved.reason,
      start_utc: null,
    };
    return r3;
  }
  let booked = await calendar_db_book(
    db,
    slug,
    uid,
    day,
    start_minute,
    weekly,
    now_iso,
    id,
  );
  if (not(booked.ok) && equal(before, null)) {
    await calendar_db_person_delete(db, uid);
  }
  return booked;
}
