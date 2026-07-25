import { number_pad_2 } from "./number_pad_2.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function date_local_iso(d) {
  "a Date rendered as 'YYYY-MM-DD' using its local year, month, and day (not UTC)";
  let year = d.getFullYear();
  let month = number_pad_2(d.getMonth() + 1);
  let n = d.getDate();
  let day = number_pad_2(n);
  let iso = text_combine_multiple([year, "-", month, "-", day]);
  return iso;
}
