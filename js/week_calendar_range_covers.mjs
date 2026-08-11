import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
export function week_calendar_range_covers(span, day, slot) {
  arguments_assert(arguments, 3);
  let same_day = equal(span.day, day);
  let after_start = greater_than_equal(slot, span.start);
  let before_end = less_than_equal(slot, span.end);
  let covers = same_day && after_start && before_end;
  return covers;
}
