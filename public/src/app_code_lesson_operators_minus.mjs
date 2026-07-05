import { app_code_lesson_operators_minus_generic } from "../../../love/public/src/app_code_lesson_operators_minus_generic.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function app_code_lesson_operators_minus() {
  const operator = js_operator_minus();
  const operator_name = "minus sign";
  let math_name = "negation";
  let verb = "subtract";
  let sign = "negative";
  let left_transform = add;
  let r = app_code_lesson_operators_minus_generic(
    operator,
    left_transform,
    operator_name,
    sign,
    verb,
    math_name,
    digit_positive_random,
  );
  return r;
}
