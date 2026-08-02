import { app_code_category_operators } from "./app_code_category_operators.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { each } from "./each.mjs";
import { app_code_lesson_operators_value_max_range_1_next } from "./app_code_lesson_operators_value_max_range_1_next.mjs";
import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { js_operators_arithmetic } from "./js_operators_arithmetic.mjs";
import { list_map } from "./list_map.mjs";
import { js_operator_to_expression_only } from "./js_operator_to_expression_only.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { js_code_call_arg } from "./js_code_call_arg.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
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
  var r = app_code_lesson_functions_console_log_generic({
    above,
    lambda$code: js_code_statement,
    name_id_rights: ["arithmetic"],
    category: app_code_category_operators(),
    next_arg,
    example_count: 1,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  let f_name = property_get(r, "fn_name");
  let lesson = property_get(r, "lesson");
  return lesson;
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, ["Before, we put a single number inside ", f_name]);
    html_div_cycle_code(c, ["We can also use ", f_name, " like this: "]);
    function lambda(o) {
      let e = js_operator_to_expression_only(o, number_next);
      let call = js_code_call_arg(f_name, e);
      let s = js_code_statement(call);
      html_div_code(c, s);
    }
    each(operators, lambda);
    app_code_container_light_blue_cycle_code(root, [
      "",
      f_name,
      " will do the math and write out the answer",
    ]);
  }
}
