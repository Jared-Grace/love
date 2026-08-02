import { floor } from "./floor.mjs";
import { modulo } from "./modulo.mjs";
import { divide } from "./divide.mjs";
import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function clock_label(boundary) {
  "a half-hour boundary index (0 is midnight, 2 is 1 AM, 34 is 5 PM) as a short 12-hour clock label, dropping the minutes on the hour: 6 is '3 AM', 7 is '3:30 AM', 34 is '5 PM'";
  let divided = divide(boundary, 2);
  let left = floor(divided);
  let hour = modulo(left, 24);
  let left2 = modulo(boundary, 2);
  let on_hour = equal(left2, 0);
  let afternoon = greater_than_equal(hour, 12);
  let suffix = afternoon ? " PM" : " AM";
  let twelve_hour = modulo(hour, 12);
  let shown = equal(twelve_hour, 0) ? 12 : twelve_hour;
  let minutes = on_hour ? "" : ":30";
  let label = text_combine_multiple([shown, minutes, suffix]);
  return label;
}
