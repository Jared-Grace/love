import { app_code_lesson_operators_asterisk_generic } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic.mjs";
import { js_operator_asterisk_verb } from "../../../love/public/src/js_operator_asterisk_verb.mjs";
import { js_operator_asterisk_symbol } from "../../../love/public/src/js_operator_asterisk_symbol.mjs";
import { multiply } from "../../../love/public/src/multiply.mjs";
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
