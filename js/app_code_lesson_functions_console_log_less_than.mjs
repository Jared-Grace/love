import { html_div_code } from "./html_div_code.mjs";
import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { js_operator_less_than } from "./js_operator_less_than.mjs";
import { integer_random } from "./integer_random.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { js_code_call_arg } from "./js_code_call_arg.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_false } from "./js_keyword_false.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_less_than() {
  let operator = js_operator_less_than();
  let symbol = property_get(operator, "operator");
  let max = app_code_lesson_operators_value_max();
  function expression(left_smaller) {
    let small = integer_random(1, max - 1);
    let large = integer_random(small + 1, max);
    let left = large;
    let right = small;
    if (left_smaller) {
      left = small;
      right = large;
    }
    let e = js_code_binary_spaced_nb(left, symbol, right);
    return e;
  }
  function refill() {
    let true_case = expression(true);
    let false_case = expression(false);
    let list = [true_case, false_case];
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  var r = app_code_lesson_functions_console_log_generic({
    above,
    lambda$code: js_code_statement,
    name_id_rights: [" less than"],
    next_arg,
    example_count: 2,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: 2,
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
    function show(left_smaller) {
      let e = expression(left_smaller);
      let call = js_code_call_arg(fn_name, e);
      let s = js_code_statement(call);
      html_div_code(c, s);
    }
    show(true);
    show(false);
    app_code_container_light_blue_cycle_code(root, [
      "Before, the answer was always a number. Now ",
      fn_name,
      " will write out ",
      js_keyword_true(),
      " or ",
      js_keyword_false(),
    ]);
  }
}
