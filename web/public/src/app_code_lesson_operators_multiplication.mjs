import { identity } from "../../../love/public/src/identity.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_multiplication() {
  const operator = "*";
  const operator_name = "multiplication";
  let math_name = operator_name;
  let verb = "multiply";
  let r = app_code_lesson_operators_generic(
    operator_name,
    operator,
    verb,
    math_name,
    identity,
    error(),
  );
  return r;
}
