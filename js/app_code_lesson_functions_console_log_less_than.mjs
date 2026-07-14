import { fn_name } from "../../love/js/fn_name.mjs";
import { html_div_code } from "./html_div_code.mjs";
import { each } from "./each.mjs";
import { app_code_lesson_operators_value_max_random_next } from "./app_code_lesson_operators_value_max_random_next.mjs";
import { identity } from "./identity.mjs";
import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { list_map } from "./list_map.mjs";
import { js_operator_to_expression_only } from "./js_operator_to_expression_only.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { js_code_call_arg } from "./js_code_call_arg.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_less_than() {
  let operator = js_operator_less_than();
  let operators = [operator];
  let symbol = property_get(operator, "operator");
  let number_next = app_code_lesson_operators_value_max_random_next();
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
    name_id_rights: [" less than"],
    next_arg,
    quiz_backwards_answer_count_override: null,
  });
  let fn_name = property_get(r, "fn_name");
  let lesson = property_get(r, "lesson");
  return lesson;
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, [
      "The symbol ",
      symbol,
      " asks a question: is the left number smaller than the right number?",
    ]);
    html_div_cycle_code(c, ["For example: "]);
    function lambda(o) {
      let e = js_operator_to_expression_only(o, number_next);
      let call = js_code_call_arg(fn_name, e);
      let s = js_code_statement(call);
      html_div_code(c, s);
    }
    each(operators, lambda);
    app_code_container_light_blue_cycle_code(root, [
      "Before, the answer was always a number. Now ",
      fn_name,
      " will write out ",
      "true",
      " or ",
      "false",
    ]);
  }
}
