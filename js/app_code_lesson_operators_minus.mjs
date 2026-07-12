import { js_operator_minus_name_root } from "./js_operator_minus_name_root.mjs";
import { js_operator_minus_verb } from "./js_operator_minus_verb.mjs";
import { js_operator_minus_name } from "./js_operator_minus_name.mjs";
import { digit_positive_random } from "./digit_positive_random.mjs";
import { app_code_lesson_operators_minus_generic } from "./app_code_lesson_operators_minus_generic.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { add } from "./add.mjs";
export function app_code_lesson_operators_minus() {
  let operator = js_operator_minus_symbol();
  let operator_name = js_operator_minus_name();
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
