import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { equal } from "./equal.mjs";
export function app_code_expression_step_operands_times_is(symbol) {
  arguments_assert(arguments, 1);
  let times = js_operator_asterisk_symbol();
  let times_is = equal(symbol, times);
  return times_is;
}
