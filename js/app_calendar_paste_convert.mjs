import { property_get } from "./property_get.mjs";
import { app_calendar_paste_convert_minutes_labelled } from "./app_calendar_paste_convert_minutes_labelled.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { country_philippines } from "./country_philippines.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ternary } from "./ternary.mjs";
export function app_calendar_paste_convert(input, country) {
  let speaker_country = country_philippines();
  let r = app_calendar_paste_convert_minutes_labelled(
    speaker_country,
    input,
    country,
  );
  let minutes_labelled = property_get(r, "minutes_labelled");
  let hours = property_get(r, "hours");
  let start = property_get(r, "start");
  let list = property_get(r, "list");
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
