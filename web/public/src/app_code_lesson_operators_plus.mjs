import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
import { digit_positive_random } from "../../../love/public/src/digit_positive_random.mjs";
import { app_code_lesson_operators_minus_generic } from "../../../love/public/src/app_code_lesson_operators_minus_generic.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function app_code_lesson_operators_plus() {
  const operator = js_operator_minus();
  const operator_name = "plus sign";
  let math_name = operator_name;
  let verb = "subtract";
  let sign = "negative";
  let left_transform = add;
  function lambda() {
    let d = digit_positive_random();
    let wrapped = js_code_wrap_parenthesis(d);
  }
  let r = app_code_lesson_operators_minus_generic(
    operator,
    left_transform,
    operator_name,
    sign,
    verb,
    math_name,
    lambda,
  );
  return r;
}
