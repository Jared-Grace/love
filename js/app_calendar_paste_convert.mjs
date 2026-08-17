import { property_get } from "./property_get.mjs";
import { app_calendar_paste_convert_duration } from "./app_calendar_paste_convert_duration.mjs";
import { country_philippines } from "./country_philippines.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_calendar_paste_convert(input, country) {
  let speaker_country = country_philippines();
  let r = app_calendar_paste_convert_duration(speaker_country, input, country);
  let duration = property_get(r, "duration");
  let start = property_get(r, "start");
  let list = property_get(r, "list");
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
