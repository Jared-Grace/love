import { date_time_zone_format_to } from "./date_time_zone_format_to.mjs";
import { date_time_zone_format_google_calendar } from "./date_time_zone_format_google_calendar.mjs";
export function date_time_zone_format_to_standard(dt) {
  let format = date_time_zone_format_google_calendar();
  let formatted = date_time_zone_format_to(dt, format);
  return formatted;
}
