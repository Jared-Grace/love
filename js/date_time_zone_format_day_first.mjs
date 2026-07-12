import { date_time_zone_format_date_day_first } from "./date_time_zone_format_date_day_first.mjs";
import { date_time_zone_format_time } from "./date_time_zone_format_time.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function date_time_zone_format_day_first() {
  let f = text_combine_multiple([
    date_time_zone_format_date_day_first(),
    " ",
    date_time_zone_format_time(),
  ]);
  return f;
}
