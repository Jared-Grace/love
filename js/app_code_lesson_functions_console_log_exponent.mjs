import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { range_map } from "./range_map.mjs";
import { list_join } from "./list_join.mjs";
import { each } from "./each.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_functions_console_log_exponent() {
  "practice a ** b (exponent): multiply the base by itself; the second number is how many to multiply together; kept small (base 2..5, exponent 2..3) so outputs stay <= 125";
  let operator = js_operator_double_asterisk();
  let symbol = property_get(operator, "operator");
  let power = property_get(operator, "fn");
  function refill() {
    "one exponent (2 or 3) with the four bases 2,3,4,5 shuffled, so the four questions are all distinct";
    let exponent = integer_random(2, 3);
    let bases = list_shuffle_take([2, 3, 4, 5], 4);
    function to_code(base) {
      let code = js_code_binary_spaced_nb(base, symbol, exponent);
      return code;
    }
    let list = list_map(bases, to_code);
    return list;
  }
  let next_arg = list_iterator_refillable(refill);
  let name_id = title_name_id();
  let lesson = app_code_lesson_expression_generic({
    above,
    name_id,
    next_arg,
    example_count: 2,
  });
  return lesson;
  function title_name_id() {
    "the home title is console.log exponent **";
    function title_get(lesson_name, left_upper) {
      function render(parent) {
        app_code_lesson_name_id_category(parent, left_upper);
        html_span_text(parent, "exponent ");
        html_span_text_code_dark(parent, symbol);
      }
      return render;
    }
    let rights = [" exponent"];
    let built = app_code_lesson_name_id_generic(rights, "operators", title_get);
    return built;
  }
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_div_cycle_code(c, ["", symbol, " means multiply a number by itself"]);
    html_div_cycle_code(c, ["The second number is how many to multiply together"]);
    let base = 2;
    function base_text(index) {
      return text_to(base);
    }
    function row(exponent) {
      "one line: base ** exponent means base * base ... , which is the result - shown for exponents 2, 3, 4 so the pattern of adding one more factor is visible";
      let expr = js_code_binary_spaced_nb(base, symbol, exponent);
      let factors = range_map(exponent, base_text);
      let product = list_join(factors, " * ");
      let result = power(base, exponent);
      html_div_cycle_code(c, [
        "",
        expr,
        " means ",
        product,
        ", which is ",
        text_to(result),
      ]);
    }
    each([2, 3, 4], row);
  }
}
