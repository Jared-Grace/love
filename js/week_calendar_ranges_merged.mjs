import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { math_max } from "./math_max.mjs";
import { each } from "./each.mjs";
export function week_calendar_ranges_merged(sorted) {
  arguments_assert(arguments, 1);
  ("join overlapping or touching windows on the same day into one: walk the day-then-start sorted list, growing the current window whenever the next one starts within a piece of its end");
  let out = [];
  let current = null;
  function flush() {
    if (not_equal(current, null)) {
      list_add(out, current);
    }
  }
  function fold(span) {
    let live = not_equal(current, null);
    let joins =
      live &&
      equal(current.day, span.day) &&
      less_than_equal(span.start, current.end + 1);
    if (joins) {
      let end = math_max(current.end, span.end);
      current = {
        day: current.day,
        start: current.start,
        end: end,
      };
    } else {
      flush();
      current = {
        day: span.day,
        start: span.start,
        end: span.end,
      };
    }
  }
  each(sorted, fold);
  flush();
  return out;
}
