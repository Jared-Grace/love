import { js_operator_division_name } from "./js_operator_division_name.mjs";
import { js_operator_division_verb } from "./js_operator_division_verb.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { multiply } from "./multiply.mjs";
import { app_code_lesson_operators_generic } from "./app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_division() {
  let operator = js_operator_division_symbol();
  let operator_name = js_operator_division_name();
  let math_name = "division";
  let verb = js_operator_division_verb();
  let r = app_code_lesson_operators_generic(
    operator,
    operator,
    operator_name,
    operator_name,
    verb,
    math_name,
    multiply,
  );
  return r;
}
