import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_whole_part_numbers } from "./app_code_expression_whole_part_numbers.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_remainder_tree } from "./app_code_expression_remainder_tree.mjs";
export function app_code_expression_remainder_random() {
  arguments_assert(arguments, 0);
  ("one remainder line written the long way, drawn fresh and built as a shape a learner can press one part at a time: 17 - Math.floor(17 / 5) * 5");
  ("The numbers come from the place that draws them for the shorter line, because the two lines are the same division and a remainder whose division ran on past two figures would print that number in the middle of the line just as surely.");
  let numbers = app_code_expression_whole_part_numbers();
  let dividend = property_get(numbers, "dividend");
  let divisor = property_get(numbers, "divisor");
  let tree = app_code_expression_remainder_tree(dividend, divisor);
  return tree;
}
