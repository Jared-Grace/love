import { identity } from "../../../love/public/src/identity.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_addition_2() {
  const operator = "+";
  const operator_name = "plus sign";
  let math_name = "addition";
  let verb = "add";
  let r = app_code_lesson_operators_generic(
    operator,
    operator,
    operator_name,
    operator_name,
    verb,
    math_name,
    identity,
  );
  return r;
}
