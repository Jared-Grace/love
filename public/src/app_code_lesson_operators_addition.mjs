import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_addition() {
  const operator = "+";
  const operator_name = "plus";
  let math_name = "addition";
  let verb = "add";
  let ending = "together";
  let r = app_code_lesson_operators_generic(
    operator_name,
    operator,
    verb,
    ending,
    math_name,
    identity,
  );
  return r;
}
