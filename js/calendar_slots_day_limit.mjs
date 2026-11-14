import { less_than_equal } from "./less_than_equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export function calendar_slots_day_limit(slots, meetings, max_per_day) {
  arguments_assert(arguments, 3);
  ("The open hours left once days that already hold max_per_day meetings are taken away; max_per_day null means no limit, and every hour is kept.");
  ("A day's meetings are counted in the host's own day, as slots and meetings are written: the one-time meetings on it, and the weekly ones on its weekday that began on or before it. A meeting still waiting for its code counts, since it holds its hour until it expires.");
  if (equal(max_per_day, null)) {
    return slots;
  }
  let counts = {};
  function count(day) {
    if (not(day in counts)) {
      let weekday = new Date(day + "T00:00:00Z").getUTCDay();
      function lambda(m) {
        let r =
          equal(m.day, day) ||
          (equal(m.weekly, 1) &&
            equal(m.weekday, weekday) &&
            less_than_equal(m.day, day));
        return r;
      }
      counts[day] = meetings.filter(lambda).length;
    }
    let r2 = counts[day];
    return r2;
  }
  function lambda2(s) {
    let a = count(s.day);
    let l = less_than(a, max_per_day);
    return l;
  }
  let r3 = slots.filter(lambda2);
  return r3;
}
