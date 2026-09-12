import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
import { app_code_expression_node_before } from "./app_code_expression_node_before.mjs";
export function app_code_expression_integer_division_tree(dividend, divisor) {
  arguments_assert(arguments, 2);
  ("one number divided by another with the answer rounded down, built as a shape a learner can press one part at a time: 14 and 4 give Math.floor(14 / 4), which comes to 3");
  ("Built as a shape rather than written out as text because a lesson that asks for one press at a time has to hand back what is left after every press, and text cannot be taken apart again without being read. The lesson that asks this line all at once writes it as text, which is all that lesson needs.");
  ("The rounding down holds the division inside it, so what a learner may press first falls out of the shape rather than being checked against a rule: the rounding cannot go first because what stands inside it is not a number yet.");
  ("This is the whole of the line, and it is also the inside of the whole part formula - so the formula is built out of this rather than beside it, and the two can never come to disagree about what integer division is.");
  let divided_by = js_operator_division_symbol();
  let floor_name = js_code_math_floor_name();
  let division = app_code_expression_node(dividend, divided_by, divisor);
  let tree = app_code_expression_node_before(floor_name, division);
  return tree;
}
