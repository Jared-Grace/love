import { app_code_lesson_operators_asterisk_generic } from "../../../love/public/src/app_code_lesson_operators_asterisk_generic.mjs";
import { js_operator_multiplication_verb } from "../../../love/public/src/js_operator_multiplication_verb.mjs";
import { js_operator_multiplication } from "../../../love/public/src/js_operator_multiplication.mjs";
import { multiply } from "../../../love/public/src/multiply.mjs";
export function app_code_lesson_operators_asterisk() {
  const operator = js_operator_multiplication();
  let lesson_name = "asterisk";
  let verb = js_operator_multiplication_verb();
  let left_transform = multiply;
  let r = app_code_lesson_operators_asterisk_generic(
    operator,
    left_transform,
    verb,
    lesson_name,
  );
  return r;
}
