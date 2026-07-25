import { clock_label } from "./clock_label.mjs";
import { busy_item_repeat_word } from "./busy_item_repeat_word.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function busy_item_label(item) {
  "a readable one-line description of a busy item: how it repeats, when in the week or on the calendar (nothing extra for a daily item), and the time span";
  let start = clock_label(item.start);
  let end = clock_label(item.end + 1);
  let repeat = busy_item_repeat_word(item.kind);
  let time = text_combine_multiple([start, " – ", end]);
  let daily = item.kind === "daily";
  let weekly = item.kind === "weekly";
  let when = weekly ? item.day : item.date;
  let label = daily
    ? text_combine_multiple([repeat, " · ", time])
    : text_combine_multiple([repeat, " · ", when, " · ", time]);
  return label;
}
