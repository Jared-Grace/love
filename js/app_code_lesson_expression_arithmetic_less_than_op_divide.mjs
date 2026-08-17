import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { multiply } from "./multiply.mjs";
export function app_code_lesson_expression_arithmetic_less_than_op_divide() {
  arguments_assert(arguments, 0);
  ("the / arithmetic piece: the top is a multiple of the bottom so the result is a small whole number");
  let bottom = integer_random(2, 4);
  let value = integer_random(2, 5);
  let top = multiply(value, bottom);
  let r = {
    left: top,
    right: bottom,
    symbol: "/",
    value,
  };
  return r;
}
