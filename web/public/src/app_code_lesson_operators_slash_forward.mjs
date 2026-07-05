import { js_operator_division_name } from "../../../love/public/src/js_operator_division_name.mjs";
import { js_operator_division } from "../../../love/public/src/js_operator_division.mjs";
import { app_code_lesson_operators_asterisk_generic } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic.mjs";
import { js_operator_multiplication_verb } from "../../../love/public/src/js_operator_multiplication_verb.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function app_code_lesson_operators_slash_forward() {
  const operator = js_operator_division();
  const lesson_name = js_operator_division_name();
  let verb = js_operator_multiplication_verb();
  let left_transform = add;
  let r = app_code_lesson_operators_asterisk_generic(
    operator,
    left_transform,
    verb,
    lesson_name,
  );
  return r;
}
