import { date_time_zone_format_to } from "../../../love/public/src/date_time_zone_format_to.mjs";
import { date_time_zone_format_time } from "../../../love/public/src/date_time_zone_format_time.mjs";
export function date_time_zone_format_time_to(start) {
  let format = date_time_zone_format_time();
  let h = date_time_zone_format_to(start, format);
  return h;
}
