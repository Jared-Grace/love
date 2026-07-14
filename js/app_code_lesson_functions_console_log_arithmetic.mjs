import { html_div_code } from "../../love/js/html_div_code.mjs";
import { each } from "../../love/js/each.mjs";
import { fn_name } from "../../love/js/fn_name.mjs";
import { app_code_lesson_operators_value_max_range_1_next } from "../../love/js/app_code_lesson_operators_value_max_range_1_next.mjs";
import { identity } from "../../love/js/identity.mjs";
import { app_code_lesson_functions_console_log_generic } from "../../love/js/app_code_lesson_functions_console_log_generic.mjs";
import { js_operators_arithmetic } from "../../love/js/js_operators_arithmetic.mjs";
import { list_map } from "../../love/js/list_map.mjs";
import { js_operator_to_expression_only } from "../../love/js/js_operator_to_expression_only.mjs";
import { list_iterator_refillable } from "../../love/js/list_iterator_refillable.mjs";
import { js_code_call_arg } from "../../love/js/js_code_call_arg.mjs";
import { html_div_cycle_code } from "../../love/js/html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "../../love/js/app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "../../love/js/app_code_container_light_blue_cycle_code.mjs";
import { property_get } from "../../love/js/property_get.mjs";
export function app_code_lesson_functions_console_log_arithmetic() {
  let operators = js_operators_arithmetic();
  let number_next = app_code_lesson_operators_value_max_range_1_next();
  function refill() {
    function mapper(o) {
      let expression = js_operator_to_expression_only(o, number_next);
      return expression;
    }
    let list = list_map(operators, mapper);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  var r = app_code_lesson_functions_console_log_generic(
    above,
    identity,
    [" arithmetic"],
    next_arg,
  );
  let fn_name = property_get(r, "fn_name");
  let lesson = property_get(r, "lesson");
  return lesson;
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, ["Before, we put a single number inside ", fn_name]);
    html_div_cycle_code(c, ["We can also use ", fn_name, " like this: "]);
    function lambda(o) {
      let e = js_operator_to_expression_only(o, number_next);
      let call = js_code_call_arg(fn_name, e);
      html_div_code(c, call);
    }
    each(operators, lambda);
    app_code_container_light_blue_cycle_code(root, [
      "",
      fn_name,
      " will write out the answer to the math expression",
    ]);
  }
}
