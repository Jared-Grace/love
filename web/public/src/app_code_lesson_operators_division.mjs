import { multiply } from "../../../love/public/src/multiply.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_division() {
  const operator = "/";
  const operator_name = "forward slash";
  let math_name = "division";
  let verb = "divide";
  let r = app_code_lesson_operators_generic(
    operator,
    operator,
    operator_name,
    operator_name,
    verb,
    math_name,
    multiply,
  );
  return r;
}
