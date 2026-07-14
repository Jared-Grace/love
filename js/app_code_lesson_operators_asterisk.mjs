import { app_code_lesson_operators_asterisk_generic } from "./app_code_lesson_operators_asterisk_generic.mjs";
import { app_code_lesson_symbol_set } from "./app_code_lesson_symbol_set.mjs";
import { js_operator_asterisk_verb } from "./js_operator_asterisk_verb.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { multiply } from "./multiply.mjs";
export function app_code_lesson_operators_asterisk() {
  let operator = js_operator_asterisk_symbol();
  let lesson_name = "asterisk";
  let verb = js_operator_asterisk_verb();
  let left_transform = multiply;
  let r = app_code_lesson_operators_asterisk_generic(
    operator,
    left_transform,
    verb,
    lesson_name,
  );
  return r;
}
