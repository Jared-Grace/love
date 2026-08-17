import { property_get } from "./property_get.mjs";
import { app_calendar_paste_convert_hours } from "./app_calendar_paste_convert_hours.mjs";
import { app_calendar_paste_convert_lambda } from "./app_calendar_paste_convert_lambda.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { country_philippines } from "./country_philippines.mjs";
import { object_merge } from "./object_merge.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { date_time_zone_format_to } from "./date_time_zone_format_to.mjs";
import { date_time_zone_format_date_day_first } from "./date_time_zone_format_date_day_first.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { ternary } from "./ternary.mjs";
export function app_calendar_paste_convert(input, country) {
  let speaker_country = country_philippines();
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
  let formatted = date_time_zone_format_to(start, r);
  list_add_first(list, formatted);
  let minutes_labelled = word_count_pluralize(minutes, "minute");
  let hours_labelled = word_count_pluralize(hours, "hour");
  let condition = greater_than_equal(hours, 1);
  let duration = ternary(condition, hours_labelled, minutes_labelled);
  let combined = text_combine_multiple([
    "Meeting is scheduled to last up to: ",
    duration,
    " total",
  ]);
  list_add(list, combined);
  let date_time_zones = list_join_newline(list);
  let r5 = {
    date_time_zones,
    start,
    duration,
  };
  return r5;
}
