import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { identity } from "./identity.mjs";
import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { js_code_call_arg_fn } from "./js_code_call_arg_fn.mjs";
import { js_operator_first_code_call_only } from "./js_operator_first_code_call_only.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_transform_first_combine } from "./list_transform_first_combine.mjs";
import { list_between_space_nb } from "./list_between_space_nb.mjs";
import { js_code_parenthesis_list } from "./js_code_parenthesis_list.mjs";
import { js_code_comma } from "./js_code_comma.mjs";
import { property_get } from "./property_get.mjs";
import { js_operator_first_code_call } from "./js_operator_first_code_call.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { app_code_container_light_blue_cycle_code_multiple } from "./app_code_container_light_blue_cycle_code_multiple.mjs";
import { html_div_cycle_code_multiple } from "./html_div_cycle_code_multiple.mjs";
export function app_code_lesson_functions_console_log_arithmetic() {
  var r = app_code_lesson_functions_console_log_generic(above, identity, []);
  let next = property_get(r, "next");
  let fn_name = property_get(r, "fn_name");
  let next_operator = property_get(r, "next_operator");
  let lesson = property_get(r, "lesson");
  return lesson;
  function above(root) {
    let os = js_operators_arithmetic();
  }
}
