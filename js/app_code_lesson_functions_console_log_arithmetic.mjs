import { identity } from "./identity.mjs";
import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { range_1_next } from "./range_1_next.mjs";
import { list_map } from "./list_map.mjs";
import { js_operator_to_expression_only } from "./js_operator_to_expression_only.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { list_first } from "./list_first.mjs";
import { js_operator_to_expression } from "./js_operator_to_expression.mjs";
import { js_code_call_arg } from "./js_code_call_arg.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_arithmetic() {
  let operators = js_operators_arithmetic();
  let m = app_code_lesson_operators_value_max();
  let number_next = range_1_next(m);
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
    let first = list_first(operators);
    let e = js_operator_to_expression(first, number_next);
    let expression = property_get(e, "expression");
    let call = js_code_call_arg(fn_name, expression);
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "Before, we put a single number inside ",
      fn_name,
    ]);
    html_div_cycle_code(c, [
      "Now, we can put a math expression inside ",
      fn_name,
      " instead: ",
      call,
    ]);
    app_code_container_light_blue_cycle_code(root, [
      "",
      fn_name,
      " will write out the answer to the math expression",
    ]);
  }
}
