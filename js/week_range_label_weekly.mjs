import { date_weekday_plural } from "./date_weekday_plural.mjs";
import { clock_label } from "./clock_label.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function week_range_label_weekly(span) {
  "a chosen window of a weekly schedule as a readable line like 'Sundays · 1 PM – 9 PM': no date, because the hours come back every week";
  let weekday = date_weekday_plural(span.day);
  let start = clock_label(span.start);
  let end = clock_label(span.end + 1);
  let label = text_combine_multiple([weekday, " · ", start, " – ", end]);
  return label;
}
