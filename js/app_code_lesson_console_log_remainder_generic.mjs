import { app_code_lesson_functions_console_log_generic } from "./app_code_lesson_functions_console_log_generic.mjs";
import { js_operator_percent } from "./js_operator_percent.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { app_code_lesson_symbol_set } from "./app_code_lesson_symbol_set.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "./app_code_container_light_blue_cycle_code.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { integer_random } from "./integer_random.mjs";
import { range } from "./range.mjs";
import { range_map } from "./range_map.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { each } from "./each.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_to } from "./text_to.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_console_log_remainder_generic(divisor, insight) {
  "a reusable remainder (%) lesson for a fixed divisor; the intro shows the CYCLE table (0..2*divisor, so the repeat is visible) and any divisor-specific insight lines (e.g. even/odd for divisor 2)";
  let operator = js_operator_percent();
  let percent = property_get(operator, "operator");
  let modulo = property_get(operator, "fn");
  let divisor_text = text_to(divisor);
  let name_right = text_combine(" remainder by ", divisor_text);
  function code_of(n) {
    let code = js_code_binary_spaced_nb(n, percent, divisor);
    return code;
  }
  function refill() {
    let max = app_code_lesson_operators_value_max();
    let base = integer_random(0, max);
    function each_offset(offset) {
      let n = add(base, offset);
      return code_of(n);
    }
    let list = range_map(divisor, each_offset);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  var r = app_code_lesson_functions_console_log_generic({
    above,
    lambda$code: js_code_statement,
    name_id_rights: [name_right],
    next_arg,
    example_count: 2,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  let lesson = property_get(r, "lesson");
  let lesson_symbol = app_code_lesson_symbol_set(lesson, percent);
  return lesson_symbol;
  function above(root) {
    let intro = app_code_container_light_blue(root);
    html_div_cycle_code(intro, [
      "",
      percent,
      " gives the remainder after dividing by ",
      divisor_text,
    ]);
    let table = app_code_container_light_blue(root);
    function row(n) {
      let expr = code_of(n);
      let remainder = modulo(n, divisor);
      html_div_cycle_code(table, ["", expr, " is ", text_to(remainder)]);
    }
    let row_count = add(multiply(2, divisor), 1);
    each(range(row_count), row);
    let has_insight = list_empty_not_is(insight);
    if (has_insight) {
      let insight_box = app_code_container_light_blue(root);
      function insight_line(line) {
        html_div_cycle_code(insight_box, line);
      }
      each(insight, insight_line);
    }
    app_code_container_light_blue_cycle_code(root, [
      "The remainder counts up, then starts over at ",
      "0",
    ]);
  }
}
