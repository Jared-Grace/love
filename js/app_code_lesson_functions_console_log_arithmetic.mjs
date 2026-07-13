import { js_operators_arithmetic } from "../../love/js/js_operators_arithmetic.mjs";
import { identity } from "../../love/js/identity.mjs";
import { app_code_lesson_functions_console_log_generic } from "../../love/js/app_code_lesson_functions_console_log_generic.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { fn_name } from "../../love/js/fn_name.mjs";
export function app_code_lesson_functions_console_log_arithmetic() {
  function lambda() {
  }
  var r = app_code_lesson_functions_console_log_generic(
    above,
    identity,
    [],
    lambda,
  );
  let next = property_get(r, "next");
  let fn_name = property_get(r, "fn_name");
  let next_operator = property_get(r, "next_operator");
  let lesson = property_get(r, "lesson");
  return lesson;
  function above(root) {
    let os = js_operators_arithmetic();
  }
}
