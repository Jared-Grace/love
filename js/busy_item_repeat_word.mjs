import { equal } from "./equal.mjs";
export function busy_item_repeat_word(kind) {
  "the human word for how a busy item repeats: 'One time', 'Daily', 'Weekly', or 'Monthly'";
  let once = equal(kind, "once");
  let daily = equal(kind, "daily");
  let weekly = equal(kind, "weekly");
  let word = once
    ? "One time"
    : daily
      ? "Daily"
      : weekly
        ? "Weekly"
        : "Monthly";
  return word;
}
