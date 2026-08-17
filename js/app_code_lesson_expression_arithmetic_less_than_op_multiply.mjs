import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { multiply } from "./multiply.mjs";
export function app_code_lesson_expression_arithmetic_less_than_op_multiply() {
  arguments_assert(arguments, 0);
  ("the * arithmetic piece: two small factors so the product stays small");
  let x = integer_random(2, 4);
  let y = integer_random(2, 4);
  let value = multiply(x, y);
  let r = {
    left: x,
    right: y,
    symbol: "*",
    value,
  };
  return r;
}
