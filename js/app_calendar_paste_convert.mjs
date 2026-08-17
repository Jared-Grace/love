import { property_get } from "./property_get.mjs";
import { app_calendar_paste_convert_condition } from "./app_calendar_paste_convert_condition.mjs";
import { country_philippines } from "./country_philippines.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ternary } from "./ternary.mjs";
export function app_calendar_paste_convert(input, country) {
  let speaker_country = country_philippines();
  let r = app_calendar_paste_convert_condition(speaker_country, input, country);
  let condition = property_get(r, "condition");
  let hours_labelled = property_get(r, "hours_labelled");
  let list = property_get(r, "list");
  let start = property_get(r, "start");
  let minutes_labelled = property_get(r, "minutes_labelled");
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
