import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { date_time_zone_from_iso } from "./date_time_zone_from_iso.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { subtract } from "./subtract.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function calendar_soon_slots(
  zone,
  now_iso,
  soon_minutes,
  hours_grace,
  meetings,
) {
  arguments_assert(arguments, 5);
  ("The test Worker's extra times, outside every opening and the notice (human, 2026-11-23: \"offer a time 2 minutes from now? goal is rapid iteration\"): soon_minutes null - the live Worker - gives none. Otherwise the page (hours_grace 0) gets the one whole minute soon_minutes from now, and a booking (hours_grace 1) every whole minute from an hour before that up to it that has not yet started, so a time shown when the page opened can still be booked a while later, the way an ordinary hour can. Each comes in the host's zone and day, like an ordinary one.");
  ("A minute a meeting already holds is left out, so the test time cannot be booked twice.");
  if (equal(soon_minutes, null)) {
    let r2 = [];
    return r2;
  }
  let moment_now = date_time_zone_from_iso(now_iso).setZone(zone);
  let minute_now = moment_now.startOf("minute");
  let slots = [];
  for (
    let back = multiply(hours_grace, 60);
    greater_than_equal(back, 0);
    back--
  ) {
    let moment_slot = minute_now.plus({
      minutes: subtract(soon_minutes, back),
    });
    if (less_than_equal(moment_slot, moment_now)) {
      continue;
    }
    let day = moment_slot.toISODate();
    let minute = multiply(moment_slot.hour, 60) + moment_slot.minute;
    function held(m) {
      let r =
        equal(m.cancelled_at, null) &&
        equal(m.day, day) &&
        equal(m.start_minute, minute);
      return r;
    }
    if (meetings.some(held)) {
      continue;
    }
    slots.push({
      day,
      start_minute: minute,
      start_utc: moment_slot.toUTC().toISO(),
      soon: true,
    });
  }
  return slots;
}
