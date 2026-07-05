import { js_operator_multiplication_verb } from "../../../love/public/src/js_operator_multiplication_verb.mjs";
import { js_operator_multiplication } from "../../../love/public/src/js_operator_multiplication.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_multiplication() {
  const operator_js = js_operator_multiplication();
  const operator_name_js = "asterisk";
  const operator_math = "×";
  let math_name = "multiplication";
  let operator_name_math = math_name + " sign";
  let verb = js_operator_multiplication_verb();
  let r = app_code_lesson_operators_generic(
    operator_js,
    operator_math,
    operator_name_js,
    operator_name_math,
    verb,
    math_name,
    identity,
  );
  return r;
}
