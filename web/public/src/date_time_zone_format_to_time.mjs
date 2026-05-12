import { date_time_zone_format_time } from "../../../love/public/src/date_time_zone_format_time.mjs";
import { date_time_zone_format_to } from "../../../love/public/src/date_time_zone_format_to.mjs";
export function date_time_zone_format_to_time(dt) {
  let format = "cccc, LLL dd yyyy " + date_time_zone_format_time();
  let formatted = date_time_zone_format_to(dt, format);
  return formatted;
}
