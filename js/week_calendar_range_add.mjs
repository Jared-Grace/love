import { arguments_assert } from "./arguments_assert.mjs";
import { math_min } from "./math_min.mjs";
import { math_max } from "./math_max.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { week_range_sort_key } from "./week_range_sort_key.mjs";
import { week_calendar_ranges_merged } from "./week_calendar_ranges_merged.mjs";
export function week_calendar_range_add(day, a, b, ranges) {
  arguments_assert(arguments, 4);
  let start = math_min(a, b);
  let end = math_max(a, b);
  list_add(ranges, {
    day: day,
    start: start,
    end: end,
  });
  list_sort_number_mapper(ranges, week_range_sort_key);
  ranges = week_calendar_ranges_merged(ranges);
  let r = {
    ranges,
  };
  return r;
}
