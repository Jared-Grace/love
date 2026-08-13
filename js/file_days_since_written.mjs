import { date_milliseconds_since } from "./date_milliseconds_since.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_stamp } from "./file_stamp.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { date_ms_to_hours } from "./date_ms_to_hours.mjs";
import { divide } from "./divide.mjs";
export async function file_days_since_written(f_path) {
  "$plain f_path";
  arguments_assert(arguments, 1);
  ("How long ago a file was last written, counted in days and kept as a fraction rather than rounded to a whole one - so a file written this morning answers well under one, and a caller asking whether something is older than a fortnight gets a straight answer either side of the line.");
  ("Nothing at all when the file cannot be asked about, which is the same answer file_stamp gives to the same question and means the same thing here: an age for a file that may not be there is worse than no age, because it reads as a measurement.");
  let stamp = await file_stamp(f_path);
  let unknown = null_is(stamp);
  if (unknown) {
    return null;
  }
  let written = property_get(stamp, "written");
  let ms = date_milliseconds_since(written);
  let hours = date_ms_to_hours(ms);
  let days = divide(hours, 24);
  return days;
}
