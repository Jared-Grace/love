import { equal } from "./equal.mjs";
import { clock_label } from "./clock_label.mjs";
import { busy_item_repeat_word } from "./busy_item_repeat_word.mjs";
import { date_weekday_short } from "./date_weekday_short.mjs";
import { date_month_day } from "./date_month_day.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function busy_item_label(item) {
  "a readable one-line description of a busy item: how it repeats, when in the week or on the calendar (nothing extra for a daily item), and the time span";
  let start = clock_label(item.start);
  let end = clock_label(item.end + 1);
  let repeat = busy_item_repeat_word(item.kind);
  let time = text_combine_multiple([start, " – ", end]);
  let daily = equal(item.kind, "daily");
  let weekly = equal(item.kind, "weekly");
  if (daily) {
    let daily_label = text_combine_multiple([repeat, " · ", time]);
    return daily_label;
  }
  if (weekly) {
    let weekly_label = text_combine_multiple([
      repeat,
      " · ",
      item.weekday,
      " · ",
      time,
    ]);
    return weekly_label;
  }
  let name = date_weekday_short(item.date);
  let label = date_month_day(item.date);
  let when = text_combine_multiple([name, " ", label]);
  let dated_label = text_combine_multiple([repeat, " · ", when, " · ", time]);
  return dated_label;
}
