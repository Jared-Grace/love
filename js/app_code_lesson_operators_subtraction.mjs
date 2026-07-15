import { js_operator_minus_verb } from "./js_operator_minus_verb.mjs";
import { js_operator_minus_name } from "./js_operator_minus_name.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { add } from "./add.mjs";
import { app_code_lesson_operators_generic } from "./app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_subtraction() {
  let operator = js_operator_minus_symbol();
  let operator_name = js_operator_minus_name();
  let math_name = "subtraction";
  let verb = js_operator_minus_verb();
  let r = app_code_lesson_operators_generic(
    operator,
    operator,
    operator_name,
    operator_name,
    verb,
    math_name,
    add,
  );
  return r;
}
