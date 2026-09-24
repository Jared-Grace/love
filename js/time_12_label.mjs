import { arguments_assert } from "./arguments_assert.mjs";
import { hour_12_shown } from "./hour_12_shown.mjs";
import { hour_12_suffix } from "./hour_12_suffix.mjs";
export function time_12_label(hours_minutes) {
  "$plain hours_minutes";
  "An 'HH:MM' time on the twenty-four hour clock written the way a twelve-hour clock reads it, minutes always shown: '23:00' is '11:00 PM', '09:05' is '9:05 AM'.";
  arguments_assert(arguments, 1);
  let parts = hours_minutes.split(":");
  let hour = Number(parts[0]);
  let label = hour_12_shown(hour) + ":" + parts[1] + hour_12_suffix(hour);
  return label;
}
