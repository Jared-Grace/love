import { js_operator_plus_verb } from "../../../love/public/src/js_operator_plus_verb.mjs";
import { js_operator_plus } from "../../../love/public/src/js_operator_plus.mjs";
import { digit_negative_random } from "../../../love/public/src/digit_negative_random.mjs";
import { js_operator_plus_name } from "../../../love/public/src/js_operator_plus_name.mjs";
import { js_code_wrap_parenthesis } from "../../../love/public/src/js_code_wrap_parenthesis.mjs";
import { app_code_lesson_operators_minus_generic } from "../../../love/public/src/app_code_lesson_operators_minus_generic.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function app_code_lesson_operators_plus() {
  const operator = js_operator_plus();
  const operator_name = js_operator_plus_name();
  let math_name = operator_name;
  let verb = js_operator_plus_verb();
  let sign = "positive";
  let left_transform = add;
  function lambda() {
    let combined = digit_negative_random();
    let wrapped = js_code_wrap_parenthesis(combined);
    return wrapped;
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
