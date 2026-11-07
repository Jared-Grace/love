import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_learn_js_lesson_for_if_greater_options() {
  arguments_assert(arguments, 0);
  ("what a for lesson whose if asks n > threshold hands in, whatever runs inside the if: the question, its groups of programs, the example, and the wrong threshold read backwards");
  ("The groups, by how many runs the if lets through: one of three, two of three, all three, and one of two. None lets nothing through, so a lesson writing out inside the if always writes something.");
  ("Read backwards, the wrong program compares against one less, so one more n is let through; or, when every n is let through already, against the start, so the first is skipped.");
  ("The example is 2, 5 and 2: n is 2, 3 and 4, and only 3 and 4 are let through. It lands on 2 once, so the walk says 2 > 2 is false - the one place the learner is shown that > leaves out the number itself.");
  let greater = js_operator_greater_than_symbol();
  function asked_write(left, threshold) {
    let asked = js_code_binary_spaced_nb(left, greater, threshold);
    return asked;
  }
  function threshold_other(threshold, start) {
    let moved = subtract(threshold, 1);
    if (less_than(threshold, start)) {
      moved = start;
    }
    return moved;
  }
  let r = {
    asked_write,
    passes: greater_than,
    groups: [
      [
        [1, 4, 2],
        [4, 7, 5],
      ],
      [
        [1, 4, 1],
        [3, 6, 3],
      ],
      [
        [2, 5, 1],
        [4, 7, 3],
      ],
      [
        [2, 4, 2],
        [5, 7, 5],
      ],
    ],
    example: [2, 5, 2],
    threshold_other,
  };
  return r;
}
