import { js_operator_minus_verb } from "../../../love/public/src/js_operator_minus_verb.mjs";
import { js_operator_minus_name } from "../../../love/public/src/js_operator_minus_name.mjs";
import { js_operator_minus } from "../../../love/public/src/js_operator_minus.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_subtraction() {
  const operator = js_operator_minus();
  const operator_name = js_operator_minus_name();
  let math_name = "subtraction";
  let verb = js_operator_minus_verb();
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
