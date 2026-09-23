import { arguments_assert } from "./arguments_assert.mjs";
import { number_pad_2 } from "./number_pad_2.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function date_local_hours_minutes(d) {
  "$plain d";
  "The clock part of a moment in its own zone, to the minute: '16:38' - the shape a time box reads and writes.";
  arguments_assert(arguments, 1);
  let n = d.getHours();
  let hours = number_pad_2(n);
  let n2 = d.getMinutes();
  let minutes = number_pad_2(n2);
  let r = text_combine_multiple([hours, ":", minutes]);
  return r;
}
