import { date_time_zone_format_time } from "../../../love/public/src/date_time_zone_format_time.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function date_time_zone_format_google_calendar() {
  let f = text_combine("cccc, LLLL d yyyy ", date_time_zone_format_time());
  return f;
}
