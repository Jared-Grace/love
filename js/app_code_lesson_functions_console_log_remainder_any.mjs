import { js_code_statement } from "./js_code_statement.mjs";
import { js_operator_percent } from "./js_operator_percent.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { range_map } from "./range_map.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_remainder_any() {
  "practice the remainder % with a mix of divisors, after learning it for 2, 3, 4 one at a time; both the number and the divisor vary each question";
  let operator = js_operator_percent();
  let percent = property_get(operator, "operator");
  function make(index) {
    "one random n % d, with the divisor from 2 to 9 and the number from 0 to 20";
    let divisor = integer_random(2, 9);
    let number = integer_random(0, 20);
    let code = js_code_binary_spaced_nb(number, percent, divisor);
    return code;
  }
  function refill() {
    let list = range_map(4, make);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  var r = app_code_lesson_functions_console_log_generic({
    above,
    lambda$code: js_code_statement,
    name_id_rights: [],
    name_id,
    next_arg,
    example_count: 2,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  let lesson = property_get(r, "lesson");
  return lesson;
  function title_name_id() {
    "the home title is console.log remainder % (no 'by <divisor>', since the divisor now varies)";
    let console_name = js_console_log_name();
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text_code_dark(parent, console_name);
        html_span_text(parent, " remainder ");
        html_span_text_code_dark(parent, percent);
      }
      return render;
    }
    let rights = [console_name, " remainder"];
    let built = app_code_lesson_name_id_generic(rights, "function", title_get);
    return built;
  }
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, ["We found the remainder ", percent, " for 2, 3, and 4"]);
    html_div_cycle_code(c, ["It works the same way for any number we divide by"]);
    html_div_cycle_code(c, ["The remainder is still what is left over"]);
  }
}
