import { js_operator_minus_name_root } from "../../../love/public/src/js_operator_minus_name_root.mjs";
import { js_operator_minus_verb } from "../../../love/public/src/js_operator_minus_verb.mjs";
import { js_operator_minus_name } from "../../../love/public/src/js_operator_minus_name.mjs";
import { digit_positive_random } from "../../../love/public/src/digit_positive_random.mjs";
import { app_code_lesson_operators_minus_generic } from "../../../love/public/src/app_code_lesson_operators_minus_generic.mjs";
import { js_operator_minus_symbol } from "../../../love/public/src/js_operator_minus_symbol.mjs";
import { add } from "../../../love/public/src/add.mjs";
export function app_code_lesson_operators_minus() {
  const operator = js_operator_minus_symbol();
  const operator_name = js_operator_minus_name();
  let math_name = js_operator_minus_name_root();
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
