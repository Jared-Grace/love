import { arguments_assert } from "./arguments_assert.mjs";
import { app_calendar_paste_convert_hours } from "./app_calendar_paste_convert_hours.mjs";
import { property_get } from "./property_get.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_calendar_paste_convert_lambda } from "./app_calendar_paste_convert_lambda.mjs";
import { list_map } from "./list_map.mjs";
import { date_time_zone_format_date_day_first } from "./date_time_zone_format_date_day_first.mjs";
export function app_calendar_paste_convert_r(speaker_country, input, country) {
  arguments_assert(arguments, 3);
  let r2 = app_calendar_paste_convert_hours(speaker_country, input);
  let hours = property_get(r2, "hours");
  let minutes = property_get(r2, "minutes");
  let start = property_get(r2, "start");
  let converted_info = {
    start,
    parenthesis: false,
  };
  object_merge(converted_info, country);
  let speaker_info = {
    start,
    parenthesis: true,
  };
  object_merge(speaker_info, speaker_country);
  let formats = [converted_info, speaker_info];
  function lambda(item) {
    let r6 = app_calendar_paste_convert_lambda(item);
    return r6;
  }
  let list = list_map(formats, lambda);
  let r = date_time_zone_format_date_day_first();
  let r3 = {
    hours,
    minutes,
    start,
    list,
    r,
  };
  return r3;
}
