import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { date_time_zone_set_zone } from "../../../love/public/src/date_time_zone_set_zone.mjs";
import { date_time_zone_format_time_to } from "../../../love/public/src/date_time_zone_format_time_to.mjs";
import { date_time_zone_format_to_standard } from "../../../love/public/src/date_time_zone_format_to_standard.mjs";
import { date_time_zone_future_is_assert_multiple } from "../../../love/public/src/date_time_zone_future_is_assert_multiple.mjs";
import { app_calendar_paste_convert_parse } from "../../../love/public/src/app_calendar_paste_convert_parse.mjs";
import { text_split_dash_en } from "../../../love/public/src/text_split_dash_en.mjs";
import { list_first_second_only } from "../../../love/public/src/list_first_second_only.mjs";
import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_calendar_paste_convert(input) {
  input = "Tuesday, May 12⋅11:00am – 12:00pm";
  const zone_input = "America/New_York";
  const zone_output = "Asia/Karachi";
  let split = text_split(input, "⋅");
  let r2 = list_first_second_only(split);
  let time_range = property_get(r2, "second");
  let split2 = text_split_dash_en(time_range);
  let mapped = list_map(split2, text_trim);
  let r3 = list_first_second_only(mapped);
  let second = property_get(r3, "second");
  let first = property_get(r3, "first");
  let date = property_get(r2, "first");
  const start = app_calendar_paste_convert_parse(date, first, zone_input);
  const end = app_calendar_paste_convert_parse(date, second, zone_input);
  const dts = [start, end];
  date_time_zone_future_is_assert_multiple(dts, zone_input);
  let formats = [
    {
      start,
      end,
      zone: zone_input,
    },
    {
      start,
      end,
      zone: zone_output,
    },
  ];
  function lambda(item) {
    let start = property_get(item, "start");
    let end = property_get(item, "end");
    let zone = property_get(item, "zone");
    const start_zoned = date_time_zone_set_zone(start, zone);
    const end_zoned = date_time_zone_set_zone(end, zone);
    let from = date_time_zone_format_to_standard(start_zoned);
    let to = date_time_zone_format_time_to(end_zoned);
    let combined = text_combine_multiple(list);
    return r;
  }
  let mapped2 = list_map(formats, lambda);
  return mapped2;
}
