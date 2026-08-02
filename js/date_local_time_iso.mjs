import { arguments_assert } from "./arguments_assert.mjs";
import { number_pad } from "./number_pad.mjs";
import { number_pad_2 } from "./number_pad_2.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function date_local_time_iso(d) {
  arguments_assert(arguments, 1);
  ("The clock part of a moment in its own zone, down to the millisecond:");
  ("'16:38:44.117'. The date part is the sibling next door, date_local_iso.");
  let hours = number_pad_2(d.getHours());
  let minutes = number_pad_2(d.getMinutes());
  let seconds = number_pad_2(d.getSeconds());
  let milliseconds = number_pad(d.getMilliseconds(), 3);
  let iso = text_combine_multiple([
    hours,
    ":",
    minutes,
    ":",
    seconds,
    ".",
    milliseconds,
  ]);
  return iso;
}
