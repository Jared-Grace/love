import { fn_name } from "./fn_name.mjs";
import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_stamp } from "./file_stamp.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { date_ms_to_hours } from "./date_ms_to_hours.mjs";
export async function file_hours_since_written(f_path) {
  "$plain f_path";
  arguments_assert(arguments, 1);
  ("How long ago a file was last written, counted in hours and kept as a fraction rather than rounded to a whole one - so a caller asking whether something has gone more than four hours stale gets a straight answer either side of the line.");
  ("Hours rather than days because a watcher that looks every hour is asking about hours, and a threshold written as a fraction of a day is a threshold nobody can read back.");
  ("Nothing at all when the file cannot be asked about, which is the same answer ",
    fn_name("file_stamp"),
    " gives to the same question and means the same thing here: an age for a file that may not be there is worse than no age, because it reads as a measurement.");
  let stamp = await file_stamp(f_path);
  let unknown = null_is(stamp);
  if (unknown) {
    return null;
  }
  let written = property_get(stamp, "written");
  let ms = date_milliseconds_since(written);
  let hours = date_ms_to_hours(ms);
  return hours;
}
