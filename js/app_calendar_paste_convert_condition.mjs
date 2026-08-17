import { arguments_assert } from "./arguments_assert.mjs";
import { app_calendar_paste_convert_minutes_labelled } from "./app_calendar_paste_convert_minutes_labelled.mjs";
import { property_get } from "./property_get.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
export function app_calendar_paste_convert_condition(
  speaker_country,
  input,
  country,
) {
  arguments_assert(arguments, 3);
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
  let r2 = {
    minutes_labelled,
    start,
    list,
    hours_labelled,
    condition,
  };
  return r2;
}
