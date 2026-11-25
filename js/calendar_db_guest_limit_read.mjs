import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { not_equal } from "./not_equal.mjs";
import { calendar_meeting_next_utc } from "./calendar_meeting_next_utc.mjs";
import { list_map } from "./list_map.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export async function calendar_db_guest_limit_read(
  db,
  slug,
  uid,
  whatsapp,
  profile_url,
  now_iso,
) {
  arguments_assert(arguments, 6);
  ("How many upcoming meetings one guest holds with the host at slug, and the most that host lets one guest hold: answers {held, limit, full}. limit is null when the host set no limit, and full is true when held has reached it.");
  ('★ A WEEKLY MEETING COUNTS AS ONE (human: "a weekly meeting counts as 1"): it is one row, and its later weeks are not counted again. A meeting still waiting for its code counts, because it already holds its hour.');
  ('★ ONE GUEST IS ANY MEETING SHARING THE SESSION (uid), THE WHATSAPP NUMBER, OR THE FACEBOOK PROFILE LINK. Nobody proves a number or a link is theirs before booking, so a new private link alone must not start the count again; numbers are compared by their digits, so spacing and a leading + do not make a second number. A guest who uses a second account is left to the host, who meets each one when the code arrives (human: "addressed by conversation with them/confirmation code").');
  ("whatsapp and profile_url may be empty or null, and then match nothing - an empty number is what every Messenger guest has.");
  let host = await db
    .prepare("SELECT max_per_guest FROM hosts WHERE slug = ?1")
    .bind(slug)
    .first();
  let limit = equal(host, null) ? null : host.max_per_guest;
  let digits = String(whatsapp ?? "").replace(/[^0-9]/g, "");
  let held_read = await db
    .prepare(
      `SELECT m.day, m.weekday, m.start_minute, m.weekly, m.host_timezone, m.guest_uid, m.profile_url, p.whatsapp
FROM meetings m JOIN hosts h ON h.uid = m.host_uid JOIN people p ON p.uid = m.guest_uid
WHERE h.slug = ?1 AND m.cancelled_at IS NULL`,
    )
    .bind(slug)
    .all();
  function same_guest(m) {
    let left = String(m.whatsapp ?? "").replace(/[^0-9]/g, "");
    let b = equal(digits, "");
    let by_number = not(b) && equal(left, digits);
    let by_profile =
      not_equal(profile_url, null) && equal(m.profile_url, profile_url);
    let by_session = not_equal(uid, null) && equal(m.guest_uid, uid);
    let r = by_number || by_profile || by_session;
    return r;
  }
  function upcoming(m) {
    let left2 = calendar_meeting_next_utc(m, now_iso);
    let r = not_equal(left2, null);
    return r;
  }
  ("★ ONE WEEKDAY AND MINUTE COUNTS AS ONE. An every-week booking that steps around taken weeks is written as several rows on the same weekday and minute (",
    fn_name("calendar_db_book"),
    '), and it is still one weekly meeting (human: "a weekly meeting counts as 1"). So rows are counted by their weekday and minute. Two single meetings a guest booked on two Mondays at the same hour then count as one too - the same hold as one weekly meeting. Rejected: a series number on each row, a new column for what the weekday and minute already say.');
  function hold_key(m) {
    let r3 = m.weekday + ":" + m.start_minute;
    return r3;
  }
  let held_rows = held_read.results.filter(same_guest).filter(upcoming);
  let mapped = list_map(held_rows, hold_key);
  let held = new Set(mapped).size;
  let full = not_equal(limit, null) && greater_than_equal(held, limit);
  let r2 = {
    held,
    limit,
    full,
  };
  return r2;
}
