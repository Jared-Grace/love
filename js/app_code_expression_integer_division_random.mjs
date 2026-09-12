import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_whole_part_numbers } from "./app_code_expression_whole_part_numbers.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_expression_integer_division_tree } from "./app_code_expression_integer_division_tree.mjs";
export function app_code_expression_integer_division_random() {
  arguments_assert(arguments, 0);
  ("one integer division line drawn fresh, built as a shape a learner can press one part at a time: Math.floor(17 / 5)");
  ("The numbers and the shape are asked for from the two places that hold them, so a screen that wants a line of this kind asks for it in one word - the lesson that hands them out one a screen, and the telling above it that walks one all the way down, want the same line and must not draw it two ways.");
  ("The numbers come from the place that draws them for the longer line this one is the inside of. The reason those numbers are chosen the way they are is entirely about what stands on the screen after the division is pressed, and that press is this line's first press too.");
  let numbers = app_code_expression_whole_part_numbers();
  let dividend = property_get(numbers, "dividend");
  let divisor = property_get(numbers, "divisor");
  let tree = app_code_expression_integer_division_tree(dividend, divisor);
  return tree;
}
