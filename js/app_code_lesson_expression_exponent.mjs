import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_expression_generic } from "./app_code_lesson_expression_generic.mjs";
import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
import { each } from "./each.mjs";
import { equal_0 } from "./equal_0.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_background } from "./html_span_text_code_background.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_code_exponent_base_color } from "./app_code_exponent_base_color.mjs";
import { app_code_exponent_power_color } from "./app_code_exponent_power_color.mjs";
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
    let star = js_operator_asterisk_symbol();
    let base_color = app_code_exponent_base_color();
    let power_color = app_code_exponent_power_color();
    let star_separator = text_combine_multiple([" ", star, " "]);
    let power_separator = text_combine_multiple([" ", symbol, " "]);
    function base_chip(parent, number) {
      "the repeated number, as a purple base-color chip";
      let chip = html_span_text_code_background(parent, text_to(number), base_color);
      return chip;
    }
    function power_chip(parent, number) {
      "how-many-times, as an orange power-color chip";
      let chip = html_span_text_code_background(parent, text_to(number), power_color);
      return chip;
    }
    function nowrap_box(parent) {
      "keeps a chip expression from breaking across lines mid-way";
      let box = html_span(parent);
      html_style_set(box, "white-space", "nowrap");
      return box;
    }
    function product_chips(parent, base, count) {
      "count base-color chips joined by a dark *, so product_chips(2, 3) reads 2 * 2 * 2 with three purple 2's";
      let box = nowrap_box(parent);
      function factor(index) {
        let first = equal_0(index);
        if (first) {
          base_chip(box, base);
        } else {
          html_span_text_code_dark(box, star_separator);
          base_chip(box, base);
        }
      }
      each(range(count), factor);
    }
    function power_chips(parent, base, power) {
      "the shorthand: a purple base, a dark **, an orange power - so power_chips(2, 3) reads 2 ** 3";
      let box = nowrap_box(parent);
      base_chip(box, base);
      html_span_text_code_dark(box, power_separator);
      power_chip(box, power);
    }
    html_div_cycle_code(c, [
      "You already know how to multiply numbers like ",
      "2 * 3 * 4",
    ]);
    html_div_cycle_code(c, ["What if the numbers are all the same number?"]);
    let like = html_div(c);
    html_span_text(like, "Like ");
    product_chips(like, 2, 3);
    let map = html_div(c);
    html_span_text(map, "The ");
    base_chip(map, 2);
    html_span_text(map, " appears ");
    power_chip(map, 3);
    html_span_text(map, " times, so we can write ");
    power_chips(map, 2, 3);
    html_span_text(map, " for short");
    let likewise = html_div(c);
    html_span_text(likewise, "Likewise ");
    product_chips(likewise, 3, 4);
    html_span_text(likewise, " is ");
    power_chips(likewise, 3, 4);
    html_div_cycle_code(c, [
      "The second number is how many to multiply together",
    ]);
  }
}
