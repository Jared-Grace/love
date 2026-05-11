import { assert } from "../../../love/public/src/assert.mjs";
import { date_time_zone_parse } from "../../../love/public/src/date_time_zone_parse.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { date_time_zone_now_year } from "../../../love/public/src/date_time_zone_now_year.mjs";
export function app_calendar_paste_convert_parse(date, hour, zone) {
  let y = date_time_zone_now_year();
  let input_luxon = text_combine_multiple([date, " ", y, " ", hour]);
  const dt = date_time_zone_parse(input_luxon, "cccc, LLL dd yyyy h:mma", zone);
  assert(dt.isValid);
  return dt;
}
