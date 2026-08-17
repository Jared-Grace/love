import { arguments_assert } from "./arguments_assert.mjs";
import { app_calendar_paste_convert_duration } from "./app_calendar_paste_convert_duration.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_calendar_paste_convert_combined(
  speaker_country,
  input,
  country,
) {
  arguments_assert(arguments, 3);
  let r = app_calendar_paste_convert_duration(speaker_country, input, country);
  let duration = property_get(r, "duration");
  let start = property_get(r, "start");
  let list = property_get(r, "list");
  let combined = text_combine_multiple([
    "Meeting is scheduled to last up to: ",
    duration,
    " total",
  ]);
  let r2 = {
    duration,
    start,
    list,
    combined,
  };
  return r2;
}
