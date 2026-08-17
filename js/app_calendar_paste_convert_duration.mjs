import { arguments_assert } from "./arguments_assert.mjs";
import { app_calendar_paste_convert_condition } from "./app_calendar_paste_convert_condition.mjs";
import { property_get } from "./property_get.mjs";
import { ternary } from "./ternary.mjs";
export function app_calendar_paste_convert_duration(
  speaker_country,
  input,
  country,
) {
  arguments_assert(arguments, 3);
  let r = app_calendar_paste_convert_condition(speaker_country, input, country);
  let condition = property_get(r, "condition");
  let hours_labelled = property_get(r, "hours_labelled");
  let list = property_get(r, "list");
  let start = property_get(r, "start");
  let minutes_labelled = property_get(r, "minutes_labelled");
  let duration = ternary(condition, hours_labelled, minutes_labelled);
  let r2 = {
    list,
    start,
    duration,
  };
  return r2;
}
