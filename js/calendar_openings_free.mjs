import { floor } from "./floor.mjs";
import { equal } from "./equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { modulo } from "./modulo.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { date_time_zone_from_iso } from "./date_time_zone_from_iso.mjs";
export function calendar_openings_free(host, openings, meetings, now_iso) {
  arguments_assert(arguments, 4);
  ("The hours a guest may still book with this host: every block inside the host's weekly openings that starts at least 24 hours after now_iso and less than 14 days after it, less the ones a meeting already holds.");
  ("Each block is counted in the host's own zone and day, the way the host's openings and meetings are written, and comes back with the moment it starts in UTC so every guest can show it in their own zone.");
  ("★ A CLOCK TIME THE HOST'S ZONE SKIPS IS NOT AN OPENING. On the night the clocks go forward an opening at 2:00 has no moment; the library moves it to 3:00, where it would be a second copy of the 3:00 block, so a block whose clock reads back different is left out.");
  ("A weekly meeting holds its weekday and minute on its first day and every week after it, never before.");
  let zone = host.timezone;
  let minutes_block = host.block_minutes;
  let minutes_meeting = host.meeting_minutes;
  let moment_now = date_time_zone_from_iso(now_iso);
  let moment_earliest = moment_now.plus({
    hours: 24,
  });
  let moment_latest = moment_now.plus({
    days: 14,
  });
  let midnight_first = moment_earliest.setZone(zone).startOf("day");
  function lambda(m) {
    let eq = equal(m.cancelled_at, null);
    return eq;
  }
  let meetings_active = meetings.filter(lambda);
  function held(iso_day, weekday, minute) {
    function lambda2(m) {
      let r =
        equal(m.start_minute, minute) &&
        (equal(m.day, iso_day) ||
          (equal(m.weekly, 1) &&
            equal(m.weekday, weekday) &&
            less_than_equal(m.day, iso_day)));
      return r;
    }
    let r2 = meetings_active.some(lambda2);
    return r2;
  }
  let slots = [];
  for (let index = 0; less_than_equal(index, 14); index++) {
    let midnight = midnight_first.plus({
      days: index,
    });
    let iso_day = midnight.toISODate();
    let weekday = modulo(midnight.weekday, 7);
    function lambda3(o) {
      let eq2 = equal(o.weekday, weekday);
      return eq2;
    }
    let openings_day = openings.filter(lambda3);
    for (let o of openings_day) {
      for (
        let minute = o.start_minute;
        less_than_equal(minute + minutes_meeting, o.end_minute);
        minute += minutes_block
      ) {
        let p = divide(minute, 60);
        let moment_slot = midnight.set({
          hour: floor(p),
          minute: modulo(minute, 60),
        });
        let clock_kept = equal(
          multiply(moment_slot.hour, 60) + moment_slot.minute,
          minute,
        );
        let in_window =
          greater_than_equal(moment_slot, moment_earliest) &&
          less_than(moment_slot, moment_latest);
        if (clock_kept && in_window && not(held(iso_day, weekday, minute))) {
          slots.push({
            day: iso_day,
            start_minute: minute,
            start_utc: moment_slot.toUTC().toISO(),
          });
        }
      }
    }
  }
  return slots;
}
