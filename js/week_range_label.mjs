import { clock_label } from "./clock_label.mjs";
import { date_weekday_short } from "./date_weekday_short.mjs";
import { date_month_day } from "./date_month_day.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function week_range_label(span) {
  "a chosen window as a readable line like 'Sun Aug 3 · 2:30 AM – 7 AM': the weekday and date, then the time span";
  let weekday = date_weekday_short(span.day);
  let month_day = date_month_day(span.day);
  let start = clock_label(span.start);
  let end = clock_label(span.end + 1);
  let label = text_combine_multiple([
    weekday,
    " ",
    month_day,
    " · ",
    start,
    " – ",
    end,
  ]);
  return label;
}
