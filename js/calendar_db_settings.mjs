import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function calendar_db_settings(db, uid) {
  arguments_assert(arguments, 2);
  ("Everything uid has set, for their settings page: person and host are null until set; schedules lists every weekly schedule by from_day, oldest first; dated lists every change to a single date.");
  let person = await db
    .prepare("SELECT name, whatsapp, timezone FROM people WHERE uid = ?1")
    .bind(uid)
    .first();
  let host = await db
    .prepare(
      "SELECT slug, block_minutes, meeting_minutes FROM hosts WHERE uid = ?1",
    )
    .bind(uid)
    .first();
  let openings_read = await db
    .prepare(
      "SELECT from_day, weekday, start_minute, end_minute FROM openings WHERE host_uid = ?1 ORDER BY from_day, weekday, start_minute",
    )
    .bind(uid)
    .all();
  let schedules = [];
  for (let o of openings_read.results) {
    let last = schedules[subtract(schedules.length, 1)];
    if (equal(last, undefined) || not_equal(last.from_day, o.from_day)) {
      last = {
        from_day: o.from_day,
        openings: [],
      };
      schedules.push(last);
    }
    last.openings.push({
      weekday: o.weekday,
      start_minute: o.start_minute,
      end_minute: o.end_minute,
    });
  }
  let dated_read = await db
    .prepare(
      "SELECT day, start_minute, end_minute, open FROM openings_dated WHERE host_uid = ?1 ORDER BY day, start_minute",
    )
    .bind(uid)
    .all();
  let r = {
    person,
    host,
    schedules,
    dated: dated_read.results,
  };
  return r;
}
