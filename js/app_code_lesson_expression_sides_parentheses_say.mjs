import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_sides_parentheses_say(run, sides) {
  arguments_assert(arguments, 2);
  ("why the two sides of a line go first, told for a line whose two sides stand in brackets: the brackets are pointed at, the question is asked, and a part always coming to the same value is what answers it");
  ("The brackets are what says these two go first, and not a number standing either side of them - every earlier line was ordered by which operator was stronger, and here all three operators are the same strength, so the brackets are the only thing left on the line that says anything about order at all.");
  ("What the sides come to is named as numbers and comparisons together, because a bracket here holds a comparison of two numbers and the learner has watched both of those come to a value already.");
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
  html_div_cycle_code(run, [
    "Numbers and comparisons solve to the same value every time",
  ]);
}
