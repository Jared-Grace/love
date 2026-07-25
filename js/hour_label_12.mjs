import { greater_than_equal } from "./greater_than_equal.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function hour_label_12(hour) {
  "an hour of the day from 0 to 23 as a 12-hour clock label with AM or PM: 0 is '12 AM', 12 is '12 PM', 13 is '1 PM'";
  let afternoon = greater_than_equal(hour, 12);
  let suffix = afternoon ? " PM" : " AM";
  let twelve_hour = modulo(hour, 12);
  let shown = equal(twelve_hour, 0) ? 12 : twelve_hour;
  let label = text_combine_multiple([shown, suffix]);
  return label;
}
