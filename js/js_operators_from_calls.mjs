import { arguments_assert } from "./arguments_assert.mjs";
import { js_operators_from_calls_generic } from "./js_operators_from_calls_generic.mjs";
import { js_operator_minus } from "./js_operator_minus.mjs";
import { js_operator_asterisk } from "./js_operator_asterisk.mjs";
import { js_operator_division } from "./js_operator_division.mjs";
import { js_operator_percent } from "./js_operator_percent.mjs";
import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
export function js_operators_from_calls(ast) {
  arguments_assert(arguments, 1);
  let o = js_operator_minus();
  let o2 = js_operator_asterisk();
  let o3 = js_operator_division();
  let o4 = js_operator_percent();
  let o5 = js_operator_double_asterisk();
  let operators = [o, o2, o3, o4, o5];
  js_operators_from_calls_generic(ast, operators);
  return;
}
