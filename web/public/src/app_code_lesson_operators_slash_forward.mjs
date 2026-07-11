import { js_operator_division_verb } from "../../../love/public/src/js_operator_division_verb.mjs";
import { js_operator_division_name } from "../../../love/public/src/js_operator_division_name.mjs";
import { js_operator_division_symbol } from "../../../love/public/src/js_operator_division_symbol.mjs";
import { app_code_lesson_operators_asterisk_generic } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic.mjs";
import { multiply } from "../../../love/public/src/multiply.mjs";
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
