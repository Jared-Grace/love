import { date_time_zone_format_time } from "../../../love/public/src/date_time_zone_format_time.mjs";
export function date_time_zone_format_day_first() {
  let f = "cccc, LLL dd, yyyy " + date_time_zone_format_time();
  return f;
}
