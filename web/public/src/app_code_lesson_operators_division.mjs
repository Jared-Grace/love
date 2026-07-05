import { js_operator_division_name } from "../../../love/public/src/js_operator_division_name.mjs";
import { js_operator_division_verb } from "../../../love/public/src/js_operator_division_verb.mjs";
import { js_operator_division } from "../../../love/public/src/js_operator_division.mjs";
import { multiply } from "../../../love/public/src/multiply.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_division() {
  const operator = js_operator_division();
  const operator_name = js_operator_division_name();
  let math_name = "division";
  let verb = js_operator_division_verb();
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
