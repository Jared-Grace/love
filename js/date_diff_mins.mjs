import { date_hours_to_mins } from "./date_hours_to_mins.mjs";
import { date_diff_hours } from "./date_diff_hours.mjs";
export function date_diff_mins(now, before) {
  let hours = date_diff_hours(now, before);
  let mins = date_hours_to_mins(hours);
  return mins;
}
