import { multiply } from "./multiply.mjs";
import { date_iso_days } from "./date_iso_days.mjs";
export function week_range_sort_key(span) {
  "a number that orders windows chronologically by date then by start piece: the date's day-number times 48, plus the start piece";
  let days = date_iso_days(span.day);
  let key = multiply(days, 48) + span.start;
  return key;
}
