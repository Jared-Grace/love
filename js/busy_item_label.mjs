import { equal } from "./equal.mjs";
import { clock_label } from "./clock_label.mjs";
import { busy_item_repeat_word } from "./busy_item_repeat_word.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function busy_item_label(item) {
  "a readable one-line description of a busy item: how it repeats, when in the week or on the calendar, and the time span";
  let start = clock_label(item.start);
  let end = clock_label(item.end + 1);
  let weekly = equal(item.kind, "weekly");
  let when = weekly ? item.day : item.date;
  let repeat = busy_item_repeat_word(item.kind);
  let label = text_combine_multiple([
    repeat,
    " · ",
    when,
    " · ",
    start,
    " – ",
    end,
  ]);
  return label;
}
