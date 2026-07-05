import { js_operator_plus_verb } from "../../../love/public/src/js_operator_plus_verb.mjs";
import { js_operator_plus_name } from "../../../love/public/src/js_operator_plus_name.mjs";
import { js_operator_plus } from "../../../love/public/src/js_operator_plus.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { app_code_lesson_operators_generic } from "../../../love/public/src/app_code_lesson_operators_generic.mjs";
export function app_code_lesson_operators_addition() {
  const operator = js_operator_plus();
  const operator_name = js_operator_plus_name();
  let math_name = "addition";
  let verb = js_operator_plus_verb();
  let r = app_code_lesson_operators_generic(
    operator,
    operator,
    operator_name,
    operator_name,
    verb,
    math_name,
    identity,
  );
  return r;
}
