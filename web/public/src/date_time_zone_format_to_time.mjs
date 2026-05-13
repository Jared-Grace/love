import { date_time_zone_format_to } from "../../../love/public/src/date_time_zone_format_to.mjs";
export function date_time_zone_format_to_time(dt) {
  let format = "h:mm a";
  let formatted = date_time_zone_format_to(dt, format);
  return formatted;
}
