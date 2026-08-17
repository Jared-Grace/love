import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { list_first_second_only } from "./list_first_second_only.mjs";
import { text_split_dash_en } from "./text_split_dash_en.mjs";
import { list_map } from "./list_map.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_last } from "./text_last.mjs";
import { integer_to_try_is } from "./integer_to_try_is.mjs";
import { text_skip_end_count } from "./text_skip_end_count.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_calendar_paste_convert_parse } from "./app_calendar_paste_convert_parse.mjs";
import { date_time_zone_future_is_assert_multiple } from "./date_time_zone_future_is_assert_multiple.mjs";
export function app_calendar_paste_convert_hours(speaker_country, input) {
  arguments_assert(arguments, 2);
  let zone = property_get(speaker_country, "zone");
  let split = text_split(input, "⋅");
  let r2 = list_first_second_only(split);
  let time_range = property_get(r2, "second");
  let split2 = text_split_dash_en(time_range);
  let mapped = list_map(split2, text_trim);
  let r3 = list_first_second_only(mapped);
  let second = property_get(r3, "second");
  let first = property_get(r3, "first");
  let item = text_last(first);
  let nn = integer_to_try_is(item);
  if (nn) {
    let am_pm_size = 2;
    let am_pm = text_skip_end_count(second, am_pm_size);
    first = text_combine(first, am_pm);
  }
  let date = property_get(r2, "first");
  let start = app_calendar_paste_convert_parse(date, first, zone);
  let end = app_calendar_paste_convert_parse(date, second, zone);
  let dts = [start, end];
  date_time_zone_future_is_assert_multiple(dts, zone);
  let r4 = end.diff(start, ["hours", "minutes"]);
  let minutes = property_get(r4, "minutes");
  let hours = property_get(r4, "hours");
  let r = {
    start,
    minutes,
    hours,
  };
  return r;
}
