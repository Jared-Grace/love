import { js_operator_division_verb } from "./js_operator_division_verb.mjs";
import { js_operator_division_name } from "./js_operator_division_name.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { app_code_lesson_operators_asterisk_generic } from "./app_code_lesson_operators_asterisk_generic.mjs";
import { app_code_lesson_symbol_set } from "./app_code_lesson_symbol_set.mjs";
import { multiply } from "./multiply.mjs";
export function app_code_lesson_operators_slash_forward() {
  let operator = js_operator_division_symbol();
  let lesson_name = js_operator_division_name();
  let verb = js_operator_division_verb();
  let left_transform = multiply;
  let r = app_code_lesson_operators_asterisk_generic(
    operator,
    left_transform,
    verb,
    lesson_name,
  );
  return r;
}
