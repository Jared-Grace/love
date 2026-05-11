import { each } from "../../../love/public/src/each.mjs";
import { app_calendar_paste_convert_parse } from "../../../love/public/src/app_calendar_paste_convert_parse.mjs";
import { date_time_zone_future_is_assert } from "../../../love/public/src/date_time_zone_future_is_assert.mjs";
import { text_split_dash_en } from "../../../love/public/src/text_split_dash_en.mjs";
import { list_first_second_only } from "../../../love/public/src/list_first_second_only.mjs";
import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { text_split } from "../../../love/public/src/text_split.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_calendar_paste_convert(input) {
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
  const zone = "America/New_York";
  const start = app_calendar_paste_convert_parse(date, first, zone);
  const end = app_calendar_paste_convert_parse(date, second, zone);
  function lambda(dt) {
    date_time_zone_future_is_assert(dt, zone);
  }
  each([start, end], lambda);
  let r = {
    start,
    end,
  };
  return r;
}
