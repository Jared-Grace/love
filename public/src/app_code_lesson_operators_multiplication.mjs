import { js_operator_asterisk_name } from "../../../love/public/src/js_operator_asterisk_name.mjs";
import { js_operator_asterisk_verb } from "../../../love/public/src/js_operator_asterisk_verb.mjs";
import { js_operator_asterisk_symbol } from "../../../love/public/src/js_operator_asterisk_symbol.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_code_lesson_operators_multiplication() {
  const operator_js = js_operator_asterisk_symbol();
  const operator_name_js = js_operator_asterisk_name();
  const operator_math = "×";
  let math_name = "multiplication";
  let operator_name_math = text_combine(math_name, " sign");
  let verb = js_operator_asterisk_verb();
  let r = app_code_lesson_operators_generic(
    operator_js,
    operator_math,
    operator_name_js,
    operator_name_math,
    verb,
    math_name,
    identity,
  );
  return r;
}
