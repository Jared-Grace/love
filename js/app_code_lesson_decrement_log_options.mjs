import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_decrement_log_options() {
  arguments_assert(arguments, 0);
  ("what a lesson about a loop taking one away from n hands in, whichever loop it is written with: let n = 3; n > 0; n-- writes out 3, 2 and 1");
  ("Only a program already running three times compares against zero. Another is offered a wrong program one further on, and a number below zero has not been shown in this course.");
  let r = {
    comparison: js_operator_greater_than_symbol(),
    comparison_mistaken: null,
    asks: greater_than,
    change: js_operator_minus_symbol(),
    step: subtract,
    step_back: add,
    groups: [
      [
        [2, 1],
        [6, 5],
      ],
      [
        [3, 1],
        [7, 5],
      ],
      [
        [3, 0],
        [6, 3],
      ],
    ],
    start: 3,
    bound: 0,
  };
  return r;
}
