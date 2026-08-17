import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { equal } from "./equal.mjs";
export function app_code_expression_step_operands_minus_is(symbol) {
  arguments_assert(arguments, 1);
  let minus = js_operator_minus_symbol();
  let minus_is = equal(symbol, minus);
  return minus_is;
}
