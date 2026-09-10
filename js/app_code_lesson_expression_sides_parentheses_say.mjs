import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_sides_parentheses_say(run, sides) {
  arguments_assert(arguments, 2);
  ("why the two sides of a line go first, told for a line whose two sides stand in parentheses: the parentheses are pointed at, and then the question of which of them goes first is asked for the run underneath to answer");
  ("The parentheses are what says these two go first, and not a number standing either side of them - every earlier line was ordered by which operator was stronger, and here all three operators are the same strength, so the parentheses are the only thing left on the line that says anything about order at all.");
  ("What the sides come to is named as numbers and comparisons together, because a parenthesis here holds a comparison of two numbers and the learner has watched both of those come to a value already.");
  let left_code = property_get(sides, "left_code");
  let right_code = property_get(sides, "right_code");
  html_div_cycle_code(run, [
    "",
    left_code,
    " and ",
    right_code,
    " are in parentheses, so they are solved before what is outside the parentheses",
  ]);
  ("the question is asked out loud before it is answered, because a learner who has only ever had one right press at a time is already looking for which of the two it is - asked, they are looking for the answer to the line below rather than for a trap");
  html_div_cycle_code(run, ["Which one do we solve first?"]);
  ("★ A ROW SAYING NUMBERS AND COMPARISONS SOLVE TO THE SAME VALUE EVERY TIME STOOD HERE AND IS GONE. It was the reason a choice between the two sides was safe, and there is no choice any more - JavaScript works out the left side of an operator before the right, so the run underneath answers the question with the left one rather than with a permission. Left standing, the row would be arguing for something nothing offers.");
}
