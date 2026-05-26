import { date_time_zone_format_time } from "../../../love/public/src/date_time_zone_format_time.mjs";
export function date_time_zone_format_google_calendar() {
  let f = "cccc, LLLL d yyyy " + date_time_zone_format_time();
  return f;
}
