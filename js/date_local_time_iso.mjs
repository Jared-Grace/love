import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_pad } from "./number_pad.mjs";
import { number_pad_2 } from "./number_pad_2.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function date_local_time_iso(d) {
  arguments_assert(arguments, 1);
  ("The clock part of a moment in its own zone, down to the millisecond:");
  ("'16:38:44.117'. The date part is the sibling next door, ",
    fn_name("date_local_iso"),
    ".");
  let n = d.getHours();
  let hours = number_pad_2(n);
  let n2 = d.getMinutes();
  let minutes = number_pad_2(n2);
  let n3 = d.getSeconds();
  let seconds = number_pad_2(n3);
  let num = d.getMilliseconds();
  let milliseconds = number_pad(num, 3);
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
