import { js_operator_plus_verb } from "./js_operator_plus_verb.mjs";
import { js_operator_plus_name } from "./js_operator_plus_name.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { identity } from "./identity.mjs";
import { app_code_lesson_operators_generic } from "./app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_addition() {
  let operator = js_operator_plus_symbol();
  let operator_name = js_operator_plus_name();
  let math_name = "addition";
  let verb = js_operator_plus_verb();
  let r = app_code_lesson_operators_generic({
    operator_js: operator,
    operator_math: operator,
    operator_name_js: operator_name,
    operator_name_math: operator_name,
    verb,
    math_name,
    left_transform: identity,
  });
  return r;
}
