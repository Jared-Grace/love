import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_learn_js_lesson_number_shown(number) {
  arguments_assert(arguments, 1);
  ("the number a learner sees for the lesson at the 1-based place number: the counting numbers in order, skipping every one whose digits hold 666, so 666, 1666, 6660 and the like are never shown and the lesson that would have worn one wears the next number instead");
  ("2026-11-27, at the human's asking. Only what is shown changes: number is still the place in the list, which progress, reviews and addresses are kept by, so nothing a learner has saved moves");
  let shown = 0;
  let counted = 0;
  while (less_than(counted, number)) {
    shown = shown + 1;
    let digits = String(shown);
    let b = digits.includes("666");
    if (not(b)) {
      counted = counted + 1;
    }
  }
  return shown;
}
