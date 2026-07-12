import { date_time_zone_format_to } from "./date_time_zone_format_to.mjs";
export function date_time_zone_format_to_time_space(dt) {
  let format = "h:mm a";
  let formatted = date_time_zone_format_to(dt, format);
  return formatted;
}
