import { js_operator_double_asterisk } from "./js_operator_double_asterisk.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quizzes_unscramble_both } from "./app_code_lesson_quizzes_unscramble_both.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_div_text_code_dark } from "./html_div_text_code_dark.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { list_join } from "./list_join.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lesson_name_id_generic } from "./app_code_lesson_name_id_generic.mjs";
import { app_code_lesson_name_id_category } from "./app_code_lesson_name_id_category.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_number_chip } from "./app_code_lesson_number_chip.mjs";
import { app_code_lesson_chip_lift } from "./app_code_lesson_chip_lift.mjs";
import { html_span_text_smaller } from "./html_span_text_smaller.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_font_jetbrains_mono } from "./html_font_jetbrains_mono.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_code_lesson_chip_color } from "./app_code_lesson_chip_color.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_exponent() {
  "practice a ** b (exponent) by writing it out as repeated multiplication (2 ** 3 becomes 2 * 2 * 2): the quiz matches the ** form with its expansion, because this lesson teaches what ** MEANS - repeated multiplication - not the arithmetic value; base 2..5, exponent 2..3";
  let operator = js_operator_double_asterisk();
  let symbol = property_get(operator, "operator");
  function product_code(base, exponent) {
    "the exponent written out as repeated multiplication - product_code(2, 3) is 2 * 2 * 2";
    let star = js_operator_asterisk_symbol();
    function base_text(index) {
      return text_to(base);
    }
    let factors = list_map(range(exponent), base_text);
    let separator = text_combine_multiple([" ", star, " "]);
    let product = list_join(factors, separator);
    return product;
  }
  function batch_get() {
    "four questions - four distinct bases (so the expansions never collide), each with its own random exponent 2 or 3 so the length of the written-out multiplication varies; the ANSWER is the expansion, not the value";
    let bases = list_shuffle_take([2, 3, 4, 5], 4);
    function to_pair(base) {
      let exponent = integer_random(2, 3);
      let question = js_code_binary_spaced_nb(base, symbol, exponent);
      let answer = product_code(base, exponent);
      let pair = {
        question,
        answer,
      };
      return pair;
    }
    let pairs = list_map(bases, to_pair);
    return pairs;
  }
  let name_id = title_name_id();
  let example_question_label = app_code_label_code_question();
  let forwards = {
    question_label: example_question_label,
    on_question: html_text_set_code_dark,
    answer_label: "What is this written out as multiplication? ",
    answer_on_button: html_style_code_dark,
    answer_count_override: null,
  };
  let backwards = {
    question_label: "Multiplication: ",
    on_question: html_text_set_code_dark,
    answer_label: "Which code uses ** for this? ",
    answer_on_button: html_style_code_dark,
    answer_count_override: null,
  };
  let quizzes_get = app_code_lesson_quizzes_unscramble_both({
    batch_get,
    forwards,
    backwards,
  });
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch_get,
    html_text_set_code_dark,
    "Expansion: ",
    quizzes_get,
    example_question_label,
    html_div_text_code_dark,
  );
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
    let power_separator = text_combine_multiple([" ", symbol, " "]);
    "two worked examples, each a base and a power - four colored numbers in all - given four distinct familiar colours (red, green, blue, amber) so every number is easy to tell apart and no number wears a colour here and another colour there";
    let base_one = app_code_lesson_chip_color(0);
    let power_one = app_code_lesson_chip_color(1);
    let base_two = app_code_lesson_chip_color(2);
    let power_two = app_code_lesson_chip_color(3);
    function chip(parent, number, color) {
      "a standalone color chip sitting in the sentence on the light background, matching a number inside the code";
      let made = app_code_lesson_number_chip(parent, number, color);
      return made;
    }
    function dark_tile(parent) {
      "one continuous black code tile that holds a whole expression, so it reads as a single unit instead of being chopped into separate pieces (matching how the % lesson renders its code)";
      let tile = html_span(parent);
      html_style_code_dark(tile);
      html_style_set(tile, "white-space", "nowrap");
      return tile;
    }
    function lifted_chip(tile, number, color) {
      "a color chip embedded INSIDE a dark tile, lifted off the black by rings - the same way the % lesson embeds its remainder chip in a code tile";
      let made = app_code_lesson_number_chip(tile, number, color);
      app_code_lesson_chip_lift(made);
      return made;
    }
    function running_count(grid, number) {
      "the count under an intermediate factor - bold and dark so the counting reads clearly; it does not compete with the final count, which stands apart by its coloured chip rather than by weight";
      let label = html_span_text_smaller(grid, text_to(number));
      html_font_color_set(label, "rgb(55, 55, 55)");
      html_style_set(label, "font-weight", "bold");
      return label;
    }
    function final_count(grid, number, color) {
      "the FINAL count as a coloured chip with white text - it IS the exponent, so it echoes the exponent chip in the shorthand and stands out clearly from the quiet running counts";
      let made = app_code_lesson_number_chip(grid, number, color);
      html_style_set(made, "font-size", "0.85em");
      return made;
    }
    function cell_at(node, row, column) {
      "place a node in a specific grid row and column";
      html_style_set(node, "grid-row", text_to(row));
      html_style_set(node, "grid-column", text_to(column));
    }
    function product_expression(parent, base, base_color, power_color, count) {
      "base * base * ... with the running count 1..count OUTSIDE the code, on the light background below each factor: row 1 is one continuous black pill (base chips joined by *), row 2 holds the counts (no black behind them), the last count in the power colour so how-many visibly becomes the exponent";
      let column_count = add(multiply(2, count), 1);
      let end_column = column_count;
      let grid = html_span(parent);
      html_style_set(grid, "display", "inline-grid");
      html_style_set(grid, "grid-template-rows", "auto auto");
      html_style_set(grid, "grid-template-columns", text_combine_multiple(["repeat(", text_to(column_count), ", auto)"]));
      html_style_set(grid, "align-items", "center");
      html_style_set(grid, "justify-items", "center");
      html_style_set(grid, "column-gap", "0.35em");
      html_style_set(grid, "row-gap", "0.4em");
      html_style_set(grid, "vertical-align", "middle");
      let pill = html_span(grid);
      html_style_set(pill, "grid-row", "2");
      html_style_set(pill, "grid-column", "1 / -1");
      html_style_set(pill, "background", "black");
      html_style_set(pill, "border-radius", "0.5em");
      html_style_set(pill, "align-self", "stretch");
      html_style_set(pill, "justify-self", "stretch");
      function spacer(column) {
        "a thin empty cell at each end so the black pill has a little padding beyond the outer chips";
        let s = html_span(grid);
        html_style_set(s, "width", "0.3em");
        cell_at(s, 1, column);
      }
      function place_factor(index) {
        let position = add(index, 1);
        let column = add(multiply(2, index), 2);
        let chip = lifted_chip(grid, base, base_color);
        cell_at(chip, 2, column);
        let last = equal(position, count);
        let numeral;
        if (last) {
          numeral = final_count(grid, position, power_color);
        } else {
          numeral = running_count(grid, position);
        }
        cell_at(numeral, 1, column);
      }
      function place_operator(gap) {
        let column = add(multiply(2, gap), 3);
        let op = html_span_text(grid, star);
        html_font_color_set(op, "white");
        html_font_jetbrains_mono(op);
        cell_at(op, 2, column);
      }
      spacer(1);
      spacer(end_column);
      each(range(count), place_factor);
      each(range(subtract(count, 1)), place_operator);
    }
    function power_expression(parent, base, power, base_color, power_color) {
      "one dark tile reading base ** power, base and power as lifted color chips, so power_expression(2, 3, ...) is 2 ** 3";
      let tile = dark_tile(parent);
      lifted_chip(tile, base, base_color);
      html_span_text(tile, power_separator);
      lifted_chip(tile, power, power_color);
    }
    html_div_cycle_code(c, [
      "You already know how to multiply numbers like ",
      "2 * 3 * 4",
    ]);
    html_div_cycle_code(c, ["What if the numbers are all the same number?"]);
    let like = html_div(c);
    html_span_text(like, "Like ");
    product_expression(like, 2, base_one, power_one, 3);
    let map = html_div(c);
    html_span_text(map, "The ");
    chip(map, 2, base_one);
    html_span_text(map, " appears ");
    chip(map, 3, power_one);
    html_span_text(map, " times, so we can write ");
    power_expression(map, 2, 3, base_one, power_one);
    html_span_text(map, " for short");
    let likewise = html_div(c);
    html_span_text(likewise, "Likewise ");
    product_expression(likewise, 3, base_two, power_two, 4);
    html_span_text(likewise, " is ");
    power_expression(likewise, 3, 4, base_two, power_two);
    html_div_cycle_code(c, [
      "The second number is how many to multiply together",
    ]);
  }
}
