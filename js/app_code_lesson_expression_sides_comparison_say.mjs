import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_sides_comparison_say(run, sides) {
  arguments_assert(arguments, 2);
  ("why the two sides of a line go first, told for a line whose two sides are comparisons: they are named as comparisons, and then the question of which of them goes first is asked for the run underneath to answer");
  ("The two sides here are usually two DIFFERENT comparisons - 2 < 5 and 3 === 3 - so there is no one operator to count two of, and the telling names what the sides ARE instead. What holds them together is the kind, so the kind is what the sentence has to reach for.");
  ("Why they go first is said as strength - a comparison is worked out before an && - and not as parentheses, because there are no parentheses on this line and there is nothing on it to point at.");
  let left_code = property_get(sides, "left_code");
  let right_code = property_get(sides, "right_code");
  let outer_symbol = property_get(sides, "outer_symbol");
  html_div_cycle_code(run, [
    "",
    left_code,
    " and ",
    right_code,
    " are comparisons, so these two are solved before the ",
    outer_symbol,
  ]);
  ("the question is asked out loud before it is answered, because a learner who has only ever had one right press at a time is already looking for which of the two it is - asked, they are looking for the answer to the line below rather than for a trap");
  html_div_cycle_code(run, [
    "But which of the two comparisons do we solve first?",
  ]);
  ("★ A ROW SAYING A COMPARISON SOLVES TO THE SAME VALUE EVERY TIME STOOD HERE AND IS GONE. It was the reason a choice between the two sides was safe, and there is no choice any more - JavaScript works out the left side of an operator before the right, so the run underneath answers the question with the left one rather than with a permission. Left standing, the row would be arguing for something nothing offers.");
}
