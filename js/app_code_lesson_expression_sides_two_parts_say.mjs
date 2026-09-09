import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_expression_sides_two_parts_say(run, sides) {
  arguments_assert(arguments, 2);
  ("why the two sides of a line go first, told for a line whose two sides need not hold the same operator: it names them as the two parts the line is made of, and says nothing about which operators they are written with");
  ("★ IT MUST NOT COUNT AND IT MUST NOT CLASS. Its lesson draws two shapes - a times on each side of a plus, and two pluses followed by a times. Counting one operator, the way the shared-operator telling does, is false on the second of them, where the two sides are written with different operators and the outer operator is spelled the same as one of them. Naming a kind, the way the comparison telling does, is true but empty here, because both shapes have arithmetic on both sides and so does the operator holding them.");
  ("What is true of both shapes is the SPLIT: the line is made of two parts, and neither can be skipped. That is also the thing worth carrying, because it is what makes the choice free - a learner who has this can work out for themselves on the next line whether there is a choice on it.");
  ("It does not say the two parts each have a number on each side. That reads as the test for which operator may go next, and it is not one a reader can apply: shown 2 + 3 + 4 * 5 the middle plus looks like it has a number on each side too. A telling that hands over a test which fails on its own line teaches the learner to be wrong carefully.");
  let left_code = property_get(sides, "left_code");
  let right_code = property_get(sides, "right_code");
  html_div_cycle_code(run, [
    "",
    left_code,
    " and ",
    right_code,
    " are the two parts of this line",
  ]);
  html_div_cycle_code(run, [
    "Both of them are solved before the line is finished",
  ]);
  html_div_cycle_code(run, ["Which one do we solve first?"]);
  html_div_cycle_code(run, [
    "Solving one of them does not change what the other comes to",
  ]);
}
