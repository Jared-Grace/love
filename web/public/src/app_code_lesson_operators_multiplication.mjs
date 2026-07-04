import { identity } from "../../../love/public/src/identity.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_multiplication() {
  const operator_js = "*";
  const operator_name_js = "asterisk";
  const operator_math = "×";
  let math_name = "multiplication";
  let verb = "multiply";
  let r = app_code_lesson_operators_generic(
    operator_js,
    operator_math,
    operator_name_js,
    "asterisk",
    verb,
    math_name,
    identity,
  );
  return r;
}
