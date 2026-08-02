import { hour_12_shown } from "./hour_12_shown.mjs";
import { hour_12_suffix } from "./hour_12_suffix.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function hour_label_12(hour) {
  "an hour of the day from 0 to 23 as a 12-hour clock label with AM or PM: 0 is '12 AM', 12 is '12 PM', 13 is '1 PM'";
  let shown = hour_12_shown(hour);
  let suffix = hour_12_suffix(hour);
  let label = text_combine_multiple([shown, suffix]);
  return label;
}
