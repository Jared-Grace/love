import { app_code_expression_integer_division_tree } from "./app_code_expression_integer_division_tree.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
export function app_code_expression_whole_part_tree(dividend, divisor) {
  arguments_assert(arguments, 2);
  ("the whole part of one number divided by another, built as a shape a learner can press one part at a time: 14 and 4 give Math.floor(14 / 4) * 4, which comes to 12");
  ("Built as a shape rather than written out as text because a lesson that asks for one press at a time has to hand back what is left after every press, and text cannot be taken apart again without being read. The lesson that asks for this line all at once writes it as text, which is all that lesson needs.");
  ("The rounding down holds the division inside it and the times stands outside, so the order a learner presses in falls out of the shape rather than being checked against a rule: the times cannot go first because what stands to the left of it is not a number yet.");
  ("The rounded division is asked for from the one place that builds it rather than built again here, the same way the remainder line asks this one for the whole part. A lesson presses integer division on its own screen a screen or two before this line is met, and a second spelling of it here would let the two lines a learner presses disagree about what the inside of the formula is.");
  ("The divisor is used twice on purpose - once inside the division and once outside the times - because that is what the formula is. It is taken once and written twice, so the two can never disagree.");
  let times = js_operator_asterisk_symbol();
  let rounded = app_code_expression_integer_division_tree(dividend, divisor);
  let tree = app_code_expression_node(rounded, times, divisor);
  return tree;
}
