import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_expression_whole_part_tree } from "./app_code_expression_whole_part_tree.mjs";
import { app_code_expression_node } from "./app_code_expression_node.mjs";
export function app_code_expression_remainder_tree(dividend, divisor) {
  arguments_assert(arguments, 2);
  ("the remainder of one number divided by another written the long way, built as a shape a learner can press one part at a time: 14 and 4 give 14 - Math.floor(14 / 4) * 4, which comes to 2");
  ("It is the whole part taken away from the number it came out of, and the whole part is asked for from the one place that builds it rather than built again here. The two lines are one line with something in front of it, so a change to the shorter one has to reach the longer one or a learner would meet a formula on one screen that the next screen contradicts.");
  let minus = js_operator_minus_symbol();
  let whole_part = app_code_expression_whole_part_tree(dividend, divisor);
  let tree = app_code_expression_node(dividend, minus, whole_part);
  return tree;
}
