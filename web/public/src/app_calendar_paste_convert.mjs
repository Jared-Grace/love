import { date_time_zone_future_is } from "../../../love/public/src/date_time_zone_future_is.mjs";
import { date_time_zone_parse } from "../../../love/public/src/date_time_zone_parse.mjs";
import { text_split_dash_en } from "../../../love/public/src/text_split_dash_en.mjs";
import { list_first_second_only } from "../../../love/public/src/list_first_second_only.mjs";
import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function app_calendar_paste_convert(input) {
  input = "Monday, May 11⋅11:00am – 12:00pm";
  let split = text_split(input, "⋅");
  let r2 = list_first_second_only(split);
  let time_range = property_get(r2, "second");
  let split2 = text_split_dash_en(time_range);
  let mapped = list_map(split2, text_trim);
  let r3 = list_first_second_only(mapped);
  let second = property_get(r3, "second");
  let first = property_get(r3, "first");
  let date = property_get(r2, "first");
  let r = await import_install("luxon");
  let DateTime = property_get(r, "DateTime");
  let input_luxon = text_combine_multiple([date, " 2026 ", first]);
  const zone = "America/New_York";
  const format = "cccc, LLL dd yyyy h:mma";
  const dt = date_time_zone_parse(input_luxon, format, zone);
  let f = date_time_zone_future_is(dt2, zone2);
  if ((dt, zone)) {
    throw new Error("DateTime is not in the future");
  }
  return dt;
}
