import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { calendar_openings_free } from "./calendar_openings_free.mjs";
import { calendar_slots_day_limit } from "./calendar_slots_day_limit.mjs";
export async function calendar_db_host_free(db, slug, now_iso, hours_ahead) {
  arguments_assert(arguments, 4);
  ("hours_ahead is how soon after now_iso the first hour may start: 24 for the page, 23 for a booking, so an hour shown when the page opened can still be booked a while later.");
  ("The host whose booking link is slug, and the hours a guest may still book with them; host is null when no host has that link. The page showing the hours and the booking that takes one both ask here, so they cannot disagree about what is open.");
  ("A day already holding the host's max_per_day meetings offers no hours at all.");
  let host = await db
    .prepare(
      "SELECT hosts.uid, hosts.block_minutes, hosts.meeting_minutes, hosts.messenger, hosts.max_per_day, people.timezone, people.name FROM hosts JOIN people ON people.uid = hosts.uid WHERE hosts.slug = ?",
    )
    .bind(slug)
    .first();
  if (equal(host, null)) {
    let r = {
      host: null,
      slots: [],
    };
    return r;
  }
  let openings_read = await db
    .prepare(
      "SELECT from_day, weekday, start_minute, end_minute FROM openings WHERE host_uid = ?",
    )
    .bind(host.uid)
    .all();
  let dated_read = await db
    .prepare(
      "SELECT day, start_minute, end_minute, open FROM openings_dated WHERE host_uid = ?",
    )
    .bind(host.uid)
    .all();
  let meetings_read = await db
    .prepare(
      "SELECT day, weekday, start_minute, weekly, cancelled_at FROM meetings WHERE host_uid = ? AND cancelled_at IS NULL",
    )
    .bind(host.uid)
    .all();
  let open = calendar_openings_free(
    host,
    openings_read.results,
    dated_read.results,
    meetings_read.results,
    now_iso,
    hours_ahead,
  );
  let slots = calendar_slots_day_limit(
    open,
    meetings_read.results,
    host.max_per_day,
  );
  let r2 = {
    host,
    slots,
  };
  return r2;
}
