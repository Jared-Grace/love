import { app_code_expression_code } from "./app_code_expression_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_expression_sides_read(tree) {
  arguments_assert(arguments, 1);
  ("the four things a sentence about a two-sided line needs, read off the line itself: each side as it is written, the operator standing inside the sides, and the operator standing between them");
  ("Read rather than handed in, so a sentence about the line cannot end up being about a different line than the one printed above it.");
  ("One record rather than four arguments, because two different tellings of the same line ask for the same four - and a teller handed one record can be swapped for another without the shape around it changing.");
  let left = property_get(tree, "left");
  let right = property_get(tree, "right");
  let left_code = app_code_expression_code(left);
  let right_code = app_code_expression_code(right);
  let side_symbol = property_get(left, "operator");
  let outer_symbol = property_get(tree, "operator");
  let sides = {
    left_code,
    right_code,
    side_symbol,
    outer_symbol,
  };
  return sides;
}
