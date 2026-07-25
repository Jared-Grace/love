import { multiply } from "./multiply.mjs";
import { week_day_names } from "./week_day_names.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function week_range_sort_key(span) {
  "a number that orders availability windows Sunday-first then earliest-first: the weekday's position in the week times 48, plus the start piece";
  let days = week_day_names();
  let day_index = list_index_of(days, span.day);
  let key = multiply(day_index, 48) + span.start;
  return key;
}
