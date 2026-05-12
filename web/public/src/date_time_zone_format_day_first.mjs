import { date_time_zone_format_date_day_first } from "../../../love/public/src/date_time_zone_format_date_day_first.mjs";
import { date_time_zone_format_time } from "../../../love/public/src/date_time_zone_format_time.mjs";
export function date_time_zone_format_day_first() {
  let f =
    date_time_zone_format_date_day_first() + " " + date_time_zone_format_time();
  return f;
}
