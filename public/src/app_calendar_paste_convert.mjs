import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_add_first } from "../../../love/public/src/list_add_first.mjs";
import { date_time_zone_format_to } from "../../../love/public/src/date_time_zone_format_to.mjs";
import { date_time_zone_format_date_day_first } from "../../../love/public/src/date_time_zone_format_date_day_first.mjs";
import { date_time_zone_format_to_time } from "../../../love/public/src/date_time_zone_format_to_time.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_skip_end_count } from "../../../love/public/src/text_skip_end_count.mjs";
import { integer_to_try_is } from "../../../love/public/src/integer_to_try_is.mjs";
import { text_last } from "../../../love/public/src/text_last.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { text_wrap_parenthesis } from "../../../love/public/src/text_wrap_parenthesis.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { date_time_zone_set_zone } from "../../../love/public/src/date_time_zone_set_zone.mjs";
import { date_time_zone_future_is_assert_multiple } from "../../../love/public/src/date_time_zone_future_is_assert_multiple.mjs";
import { app_calendar_paste_convert_parse } from "../../../love/public/src/app_calendar_paste_convert_parse.mjs";
import { text_split_dash_en } from "../../../love/public/src/text_split_dash_en.mjs";
import { list_first_second_only } from "../../../love/public/src/list_first_second_only.mjs";
import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_calendar_paste_convert(input) {
  const zone_input = "America/New_York";
  const zone_output = "Asia/Karachi";
  let country_main = "Pakistan";
  let country_speaker = "USA";
  let split = text_split(input, "⋅");
  let r2 = list_first_second_only(split);
  let time_range = property_get(r2, "second");
  let split2 = text_split_dash_en(time_range);
  let mapped = list_map(split2, text_trim);
  let r3 = list_first_second_only(mapped);
  let second = property_get(r3, "second");
  let first = property_get(r3, "first");
  let item2 = text_last(first);
  let nn = integer_to_try_is(item2);
  if (nn) {
    const am_pm_size = 2;
    let am_pm = text_skip_end_count(second, am_pm_size);
    first = text_combine(first, am_pm);
  }
  let date = property_get(r2, "first");
  const start = app_calendar_paste_convert_parse(date, first, zone_input);
  const end = app_calendar_paste_convert_parse(date, second, zone_input);
  const dts = [start, end];
  date_time_zone_future_is_assert_multiple(dts, zone_input);
  const r4 = end.diff(start, ["hours", "minutes"]);
  let minutes = property_get(r4, "minutes");
  let hours = property_get(r4, "hours");
  let formats = [
    {
      start,
      zone: zone_output,
      country: country_main,
      parenthesis: false,
      flag: "🇵🇰",
    },
    {
      start,
      zone: zone_input,
      country: country_speaker,
      parenthesis: true,
      flag: "🇺🇸",
    },
  ];
  function lambda(item) {
    let start = property_get(item, "start");
    let zone = property_get(item, "zone");
    let country = property_get(item, "country");
    let parenthesis = property_get(item, "parenthesis");
    let flag = property_get(item, "flag");
    const start_zoned = date_time_zone_set_zone(start, zone);
    let start_formatted = date_time_zone_format_to_time(start_zoned);
    let t = text_combine_multiple([
      flag,
      " ",
      country,
      " Meeting start time: ",
      start_formatted,
    ]);
    if (parenthesis) {
      t = text_wrap_parenthesis(t);
    }
    return t;
  }
  let list = list_map(formats, lambda);
  let r = date_time_zone_format_date_day_first();
  let formatted = date_time_zone_format_to(start, r);
  list_add_first(list, formatted);
  tcm;
  list_add(list, item3);
  let date_time_zones = list_join_newline(list);
  return date_time_zones;
}
