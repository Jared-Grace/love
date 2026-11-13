import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { date_time_zone_from_iso } from "./date_time_zone_from_iso.mjs";
import { equal } from "./equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { modulo } from "./modulo.mjs";
import { divide } from "./divide.mjs";
import { floor } from "./floor.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
export function calendar_openings_free(
  host,
  openings,
  openings_dated,
  meetings,
  now_iso,
) {
  arguments_assert(arguments, 5);
  ("The hours a guest may still book with this host: every block inside the host's weekly openings, or inside a stretch added on that date, that starts at least 24 hours after now_iso and less than 14 days after it, less the ones a meeting already holds.");
  ("Each day takes its weekly openings from the one schedule in force on it: the rows with the latest from_day not after that day.");
  ("★ A BUSY STRETCH REMOVES EVERY MEETING IT TOUCHES, NOT ONLY THE ONES STARTING INSIDE IT. A doctor's visit from 10:15 to 11:00 takes away the 10:00 meeting too, since that meeting would still be running at 10:15.");
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
    function lambda4(d) {
      let eq3 = equal(d.day, iso_day);
      return eq3;
    }
    let dated_day = openings_dated.filter(lambda4);
    function lambda5(d) {
      let eq4 = equal(d.open, 1);
      return eq4;
    }
    let added_day = dated_day.filter(lambda5);
    function lambda6(d) {
      let eq5 = equal(d.open, 0);
      return eq5;
    }
    let busy_day = dated_day.filter(lambda6);
    function lambda7(o) {
      let r3 = o.from_day;
      return r3;
    }
    function lambda8(from_day) {
      let le = less_than_equal(from_day, iso_day);
      return le;
    }
    let from_days_started = openings.map(lambda7).filter(lambda8);
    function lambda9(a, b) {
      let r4 = greater_than(a, b) ? a : b;
      return r4;
    }
    let from_day_kept = from_days_started.reduce(lambda9, "");
    function lambda10(o) {
      let eq6 = equal(o.from_day, from_day_kept);
      return eq6;
    }
    let schedule_day = openings.filter(lambda10);
    let openings_day = schedule_day.filter(lambda3).concat(added_day);
    let minutes_seen = new Set();
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
        function lambda11(d) {
          let r5 =
            less_than(d.start_minute, minute + minutes_meeting) &&
            less_than(minute, d.end_minute);
          return r5;
        }
        let touches_busy = busy_day.some(lambda11);
        let minute_repeated = minutes_seen.has(minute);
        minutes_seen.add(minute);
        if (
          clock_kept &&
          in_window &&
          not(touches_busy) &&
          not(minute_repeated) &&
          not(held(iso_day, weekday, minute))
        ) {
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
