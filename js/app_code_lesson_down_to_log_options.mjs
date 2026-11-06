import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_equal_symbol } from "./js_operator_greater_than_equal_symbol.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_down_to_log_options() {
  arguments_assert(arguments, 0);
  ("what a lesson about a loop counting down to and including its number hands in, whichever loop it is written with: let n = 3; n >= 1; n-- writes out 3, 2 and 1");
  ("No program compares against 0, so no wrong answer and no wrong program reaches a number below zero, which this course has not shown.");
  let r = {
    comparison: js_operator_greater_than_equal_symbol(),
    comparison_mistaken: js_operator_greater_than_symbol(),
    asks: greater_than_equal,
    change: js_operator_minus_symbol(),
    step: subtract,
    step_back: add,
    groups: [
      [
        [3, 3],
        [6, 6],
      ],
      [
        [3, 2],
        [6, 5],
      ],
      [
        [3, 1],
        [6, 4],
      ],
    ],
    start: 3,
    bound: 1,
  };
  return r;
}
