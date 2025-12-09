import { date_hours_to_mins } from "../../../love/public/src/date_hours_to_mins.mjs";
import { date_diff_hours } from "../../../love/public/src/date_diff_hours.mjs";
export function date_diff_mins(now, before) {
  const hours = date_diff_hours(now, before);
  let mins = date_hours_to_mins(hours);
  return mins;
}
