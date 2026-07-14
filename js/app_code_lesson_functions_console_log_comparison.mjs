import { html_div_code } from "./html_div_code.mjs";
import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { integer_random } from "./integer_random.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { js_code_call_arg } from "./js_code_call_arg.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_comparison(
  operator,
  compare_word,
  name_id_rights,
  closing,
) {
  let symbol = property_get(operator, "operator");
  let compare = property_get(operator, "fn");
  let max = app_code_lesson_operators_value_max();
  function expression(want_true) {
    let small = integer_random(1, max - 1);
    let large = integer_random(small + 1, max);
    let left = small;
    let right = large;
    let is_true = compare(left, right);
    let matches = equal(is_true, want_true);
    if (not(matches)) {
      left = large;
      right = small;
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
    name_id_rights,
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
    let tail = text_combine_multiple([
      " asks a question: is the left number ",
      compare_word,
      " than the right number?",
    ]);
    html_div_cycle_code(c, ["The symbol ", symbol, tail]);
    html_div_cycle_code(c, ["For example: "]);
    function show(want_true) {
      let e = expression(want_true);
      let call = js_code_call_arg(fn_name, e);
      let s = js_code_statement(call);
      html_div_code(c, s);
    }
    show(true);
    show(false);
    let parts = closing(fn_name);
    app_code_container_light_blue_cycle_code(root, parts);
  }
}
