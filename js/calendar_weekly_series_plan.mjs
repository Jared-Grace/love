import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { date_add_days } from "./date_add_days.mjs";
export function calendar_weekly_series_plan(day, clashes) {
  arguments_assert(arguments, 2);
  ("How an every-week meeting starting on day (YYYY-MM-DD, the host's day) is booked around the meetings already at that weekday and minute on later days. clashes is a slot's weekly_clashes, each {day, weekly}. The page draws the every-week card from this and the server writes the rows from it, so the two cannot disagree.");
  ('SKIP THE TAKEN WEEKS (human, 2026-11-25: "These mondays will be scheduled: ... And then every week beginning on ... We cannot meet on these Mondays because they are already booked"). Each free week before the last taken one becomes a one-time meeting (singles), and the repeating meeting starts the week after it (weekly_from); taken lists the weeks skipped. With nothing taken, singles and taken are empty and weekly_from is day itself.');
  ("open is false when someone else meets every week at this time from a later day: every week from then on is theirs, so this one could only ever be a run of single meetings, and the card stays shut instead. Rejected: booking singles up to that day, which could be months of rows.");
  function weekly_is(c) {
    let r = c.weekly;
    return r;
  }
  if (clashes.some(weekly_is)) {
    let shut = {
      open: false,
      singles: [],
      weekly_from: null,
      taken: [],
    };
    return shut;
  }
  function day_of(c) {
    let r2 = c.day;
    return r2;
  }
  let mapped = list_map(clashes, day_of);
  let taken = [...new Set(mapped)].sort();
  if (equal(taken.length, 0)) {
    let plain = {
      open: true,
      singles: [],
      weekly_from: day,
      taken: [],
    };
    return plain;
  }
  let last = taken[subtract(taken.length, 1)];
  let singles = [];
  let week = day;
  while (less_than(week, last)) {
    let b = taken.includes(week);
    if (not(b)) {
      singles.push(week);
    }
    week = date_add_days(week, 7);
  }
  let skipped = {
    open: true,
    singles,
    weekly_from: date_add_days(last, 7),
    taken,
  };
  return skipped;
}
