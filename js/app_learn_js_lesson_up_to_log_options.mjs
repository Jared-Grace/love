import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { add } from "./add.mjs";
import { subtract } from "./subtract.mjs";
export function app_learn_js_lesson_up_to_log_options() {
  arguments_assert(arguments, 0);
  ("what a lesson about a loop running up to and including its number hands in, whichever loop it is written with: let n = 1; n <= 3; n++ writes out 1, 2 and 3");
  let r = {
    comparison: js_operator_less_than_equal_symbol(),
    comparison_mistaken: js_operator_less_than_symbol(),
    asks: less_than_equal,
    change: js_operator_plus_symbol(),
    step: add,
    step_back: subtract,
    groups: [
      [
        [3, 3],
        [6, 6],
      ],
      [
        [2, 3],
        [5, 6],
      ],
      [
        [1, 3],
        [4, 6],
      ],
    ],
    start: 1,
    bound: 3,
  };
  return r;
}
