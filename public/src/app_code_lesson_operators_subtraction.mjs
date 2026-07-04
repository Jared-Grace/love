import { identity } from "../../../love/public/src/identity.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_subtraction() {
  const operator = "-";
  const operator_name = "subtraction";
  let math_name = operator_name;
  let verb = "subtract";
  let ending = "from each other";
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
