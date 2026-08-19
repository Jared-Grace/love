import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_or_intro(parent) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  ("It names the one thing that changed and nothing else. The learner has just solved both sides of an && and then the && itself; the whole of what this screen adds is that the operator in the middle can be || instead.");
  html_div_cycle_code(parent, [
    "Now the operator in the middle can be ",
    "||",
    ", with a comparison on each side",
  ]);
  html_div_cycle_code(parent, [
    "The two comparisons are still solved before the ",
    "||",
  ]);
}
