import { clock_label } from "./clock_label.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function week_range_label(span) {
  "a chosen availability window as a readable line like 'Tue 3 PM – 5 PM': the weekday, the start of its first piece, and the end of its last piece";
  let start = clock_label(span.start);
  let end = clock_label(span.end + 1);
  let label = text_combine_multiple([span.day, " ", start, " – ", end]);
  return label;
}
