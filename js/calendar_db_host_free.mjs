import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { calendar_host_window } from "./calendar_host_window.mjs";
import { subtract } from "./subtract.mjs";
import { calendar_openings_free } from "./calendar_openings_free.mjs";
import { calendar_slots_day_limit } from "./calendar_slots_day_limit.mjs";
import { calendar_soon_slots } from "./calendar_soon_slots.mjs";
export async function calendar_db_host_free(
  db,
  slug,
  now_iso,
  hours_grace,
  soon_minutes,
) {
  arguments_assert(arguments, 5);
  ("soon_minutes is null, or on the test Worker how many minutes from now its extra test time starts; those times come first and skip the openings, the notice and the day limit, so a booking and its alarm can be tried in minutes.");
  ("The first hour may start the host's notice_hours after now_iso, less hours_grace: 0 for the page, 1 for a booking, so an hour shown when the page opened can still be booked a while later. The last starts before the host's days_ahead.");
  ("The host whose booking link is slug, and the hours a guest may still book with them; host is null when no host has that link. The page showing the hours and the booking that takes one both ask here, so they cannot disagree about what is open.");
  ("A day already holding the host's max_per_day meetings offers no hours at all.");
  let host = await db
    .prepare(
      "SELECT hosts.uid, hosts.block_minutes, hosts.meeting_minutes, hosts.messenger, hosts.max_per_day, hosts.notice_hours, hosts.days_ahead, people.timezone, people.name FROM hosts JOIN people ON people.uid = hosts.uid WHERE hosts.slug = ?",
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
  let booking_window = calendar_host_window(host);
  let hours_ahead = subtract(booking_window.notice_hours, hours_grace);
  let open = calendar_openings_free(
    host,
    openings_read.results,
    dated_read.results,
    meetings_read.results,
    now_iso,
    hours_ahead,
    booking_window.days_ahead,
  );
  let slots = calendar_slots_day_limit(
    open,
    meetings_read.results,
    host.max_per_day,
  );
  let soon = calendar_soon_slots(
    host.timezone,
    now_iso,
    soon_minutes,
    hours_grace,
    meetings_read.results,
  );
  let r2 = {
    host,
    slots: soon.concat(slots),
  };
  return r2;
}
