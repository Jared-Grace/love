import { arguments_assert } from "./arguments_assert.mjs";
import { integer_random } from "./integer_random.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_expression_arithmetic_less_than_op_add() {
  arguments_assert(arguments, 0);
  ("the + arithmetic piece: two small addends and their sum, sum always at least 2");
  let x = integer_random(1, 4);
  let y = integer_random(1, 4);
  let value = add(x, y);
  let r = {
    left: x,
    right: y,
    symbol: "+",
    value,
  };
  return r;
}
