import { date_time_zone_format_google_calendar } from "./date_time_zone_format_google_calendar.mjs";
import { assert_json_get } from "./assert_json_get.mjs";
import { date_time_zone_parse } from "./date_time_zone_parse.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { date_time_zone_now_year } from "./date_time_zone_now_year.mjs";
export function app_calendar_paste_convert_parse(date, hour, zone) {
  let y = date_time_zone_now_year();
  let input_luxon = text_combine_multiple([date, " ", y, " ", hour]);
  let format = date_time_zone_format_google_calendar();
  let dt = date_time_zone_parse(input_luxon, format, zone);
  function lambda() {
    let r = [dt.invalidReason, dt.invalidExplanation];
    return r;
  }
  assert_json_get(dt.isValid, lambda);
  return dt;
}
