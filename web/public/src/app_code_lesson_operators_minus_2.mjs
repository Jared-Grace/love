import { js_operator_minus_verb } from "../../../love/public/src/js_operator_minus_verb.mjs";
import { js_operator_minus_name } from "../../../love/public/src/js_operator_minus_name.mjs";
import { digit_positive_random } from "../../../love/public/src/digit_positive_random.mjs";
import { app_code_lesson_operators_minus_generic } from "../../../love/public/src/app_code_lesson_operators_minus_generic.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function app_code_lesson_operators_minus_2() {
  const operator = js_operator_minus();
  const operator_name = js_operator_minus_name();
  let math_name = "negation";
  let verb = js_operator_minus_verb();
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
