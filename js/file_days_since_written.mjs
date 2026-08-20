import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_hours_since_written } from "./file_hours_since_written.mjs";
import { null_is } from "./null_is.mjs";
import { divide } from "./divide.mjs";
export async function file_days_since_written(f_path) {
  "$plain f_path";
  arguments_assert(arguments, 1);
  ("How long ago a file was last written, counted in days and kept as a fraction rather than rounded to a whole one - so a file written this morning answers well under one, and a caller asking whether something is older than a fortnight gets a straight answer either side of the line.");
  ("The hours are the measurement and the days are the reading of it, so the one file that knows how to ask when a file was written stays one file.");
  ("Nothing at all when the file cannot be asked about, which is the same answer ",
    fn_name("file_stamp"),
    " gives to the same question and means the same thing here: an age for a file that may not be there is worse than no age, because it reads as a measurement.");
  let hours = await file_hours_since_written(f_path);
  let unknown = null_is(hours);
  if (unknown) {
    return null;
  }
  let days = divide(hours, 24);
  return days;
}
