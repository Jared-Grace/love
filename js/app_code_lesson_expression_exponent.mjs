import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { range_map } from "./range_map.mjs";
import { list_join } from "./list_join.mjs";
import { text_to } from "./text_to.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_exponent() {
  "practice a ** b (exponent): multiply the base by itself; the second number is how many to multiply together; kept small (base 2..5, exponent 2..3) so outputs stay <= 125";
  let operator = js_operator_double_asterisk();
  let symbol = property_get(operator, "operator");
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
        html_span_text(parent, "Exponent ");
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
    let triple_equal = js_operator_triple_equal_symbol();
    function repeat_product(base, count) {
      "count copies of base joined with *, so repeat_product(2, 3) is the code 2 * 2 * 2";
      function base_text(index) {
        return text_to(base);
      }
      let factors = range_map(count, base_text);
      let product = list_join(factors, " * ");
      return product;
    }
    function short_of(base, count) {
      "the exponent shorthand for count copies of base, so short_of(2, 3) is the code 2 ** 3";
      let code = js_code_binary_spaced_nb(base, symbol, count);
      return code;
    }
    function same_equation(base, count) {
      "the long product and its shorthand are equal, so same_equation(2, 3) is 2 * 2 * 2 === 2 ** 3";
      let long = repeat_product(base, count);
      let short = short_of(base, count);
      let code = js_code_binary_spaced_nb(long, triple_equal, short);
      return code;
    }
    html_div_cycle_code(c, [
      "You already know how to multiply numbers like ",
      "2 * 3 * 4",
    ]);
    html_div_cycle_code(c, ["What if the numbers are all the same number?"]);
    html_div_cycle_code(c, ["Like ", repeat_product(2, 3)]);
    html_div_cycle_code(c, [
      "There are three 2's, so we can write ",
      short_of(2, 3),
      " for short",
    ]);
    html_div_cycle_code(c, ["", same_equation(2, 3)]);
    html_div_cycle_code(c, ["Likewise ", same_equation(3, 4)]);
    html_div_cycle_code(c, [
      "The second number is how many to multiply together",
    ]);
  }
}
