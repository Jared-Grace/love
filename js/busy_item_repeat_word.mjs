import { equal } from "./equal.mjs";
export function busy_item_repeat_word(kind) {
  "the human word for how a busy item repeats: 'One time', 'Weekly', or 'Monthly'";
  let once = equal(kind, "once");
  let weekly = equal(kind, "weekly");
  let word = once ? "One time" : weekly ? "Weekly" : "Monthly";
  return word;
}
