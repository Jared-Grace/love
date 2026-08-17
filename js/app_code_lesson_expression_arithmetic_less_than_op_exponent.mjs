import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { exponent } from "./exponent.mjs";
export function app_code_lesson_expression_arithmetic_less_than_op_exponent() {
  arguments_assert(arguments, 0);
  ("the ** arithmetic piece: a small base to a small power so the result stays small");
  let base = integer_random(2, 3);
  let power = integer_random(2, 3);
  let value = exponent(base, power);
  let r = {
    left: base,
    right: power,
    symbol: "**",
    value,
  };
  return r;
}
