import { add } from "../../../love/public/src/add.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_subtraction_2() {
  const operator = "-";
  const operator_name = "minus";
  let math_name = "subtraction";
  let verb = "subtract";
  let r = app_code_lesson_operators_generic(
    operator,
    operator,
    operator_name,
    operator_name,
    verb,
    math_name,
    add,
  );
  return r;
}
