import { arguments_assert } from "./arguments_assert.mjs";
import { app_calendar_paste_convert_r } from "./app_calendar_paste_convert_r.mjs";
import { property_get } from "./property_get.mjs";
import { date_time_zone_format_to } from "./date_time_zone_format_to.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
export function app_calendar_paste_convert_minutes_labelled(
  speaker_country,
  input,
  country,
) {
  arguments_assert(arguments, 3);
  let r2 = app_calendar_paste_convert_r(speaker_country, input, country);
  let r = property_get(r2, "r");
  let list = property_get(r2, "list");
  let start = property_get(r2, "start");
  let minutes = property_get(r2, "minutes");
  let hours = property_get(r2, "hours");
  let formatted = date_time_zone_format_to(start, r);
  list_add_first(list, formatted);
  let minutes_labelled = word_count_pluralize(minutes, "minute");
  let r3 = {
    list,
    start,
    hours,
    minutes_labelled,
  };
  return r3;
}
