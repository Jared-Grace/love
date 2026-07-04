import { error } from "../../../love/public/src/error.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_subtraction() {
  const operator = "-";
  const operator_name = "minus";
  let math_name = "subtraction";
  let verb = "subtract";
  let operator_name_js = error();
  let operator_js = error();
  let r = app_code_lesson_operators_generic(
    operator_js,
    operator,
    operator_name_js,
    operator_name,
    verb,
    math_name,
    add,
  );
  return r;
}
