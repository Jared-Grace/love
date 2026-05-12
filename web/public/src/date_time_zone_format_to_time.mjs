import { date_time_zone_format_to } from "../../../love/public/src/date_time_zone_format_to.mjs";
import { date_time_zone_format } from "../../../love/public/src/date_time_zone_format.mjs";
export function date_time_zone_format_to_time(dt) {
  let format = date_time_zone_format();
  let formatted = date_time_zone_format_to(dt, format);
  return formatted;
}
