import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_choose_order_both_sides_any_comparison_intro(
  parent,
) {
  arguments_assert(arguments, 1);
  ("the one sentence that says what is different about this lesson, in a card of its own");
  ("It names the one thing that changed and nothing else. The learner already solves both sides of a line and then the comparison between them; the whole of what this screen adds is that the comparison in the middle can be any of the six, and that the two sides are solved first whichever one it is.");
  html_div_cycle_code(parent, [
    "Now the operator in the middle can be any comparison, not only ",
    "===",
  ]);
  html_div_cycle_code(parent, [
    "The two sides are still solved before the comparison",
  ]);
}
