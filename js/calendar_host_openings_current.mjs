import { arguments_assert } from "./arguments_assert.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
export function calendar_host_openings_current(settings, today) {
  arguments_assert(arguments, 2);
  ("The host's weekly free hours in force on today: the openings of the latest schedule starting on or before it, or none when no schedule has started yet. A schedule only ever starts on a date, so one starting later is not yet in force.");
  function started(s) {
    let le = less_than_equal(s.from_day, today);
    return le;
  }
  function by_start(a, b) {
    let r = less_than(a.from_day, b.from_day) ? -1 : 1;
    return r;
  }
  let schedules = settings.schedules.filter(started).sort(by_start);
  let current = schedules.length
    ? schedules[subtract(schedules.length, 1)].openings
    : [];
  return current;
}
