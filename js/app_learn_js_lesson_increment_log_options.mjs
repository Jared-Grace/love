import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { less_than } from "./less_than.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export function app_learn_js_lesson_increment_log_options() {
  arguments_assert(arguments, 0);
  ("what a lesson about a loop adding one to n hands in, whichever loop it is written with: let n = 1; n < 4; n++ writes out 1, 2 and 3");
  let r = {
    comparison: js_operator_less_than_symbol(),
    comparison_mistaken: null,
    asks: less_than,
    change: js_operator_plus_symbol(),
    step: add,
    step_back: subtract,
    groups: [
      [
        [3, 4],
        [6, 7],
      ],
      [
        [2, 4],
        [5, 7],
      ],
      [
        [1, 4],
        [4, 7],
      ],
    ],
    start: 1,
    bound: 4,
  };
  return r;
}
