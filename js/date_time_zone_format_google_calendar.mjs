import { date_time_zone_format_time } from "./date_time_zone_format_time.mjs";
import { text_combine } from "./text_combine.mjs";
export function date_time_zone_format_google_calendar() {
  let f = text_combine("cccc, LLLL d yyyy ", date_time_zone_format_time());
  return f;
}
