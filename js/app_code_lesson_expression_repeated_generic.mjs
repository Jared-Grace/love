import { app_code_lesson_expression_repeated_generic_final_count } from "./app_code_lesson_expression_repeated_generic_final_count.mjs";
import { app_code_lesson_expression_repeated_generic_short_form } from "./app_code_lesson_expression_repeated_generic_short_form.mjs";
import { app_code_lesson_expression_repeated_generic_running_count } from "./app_code_lesson_expression_repeated_generic_running_count.mjs";
import { app_code_lesson_expression_repeated_generic_expanded_code } from "./app_code_lesson_expression_repeated_generic_expanded_code.mjs";
import { app_code_lesson_expression_repeated_generic_title_name_id } from "./app_code_lesson_expression_repeated_generic_title_name_id.mjs";
import { app_code_lesson_number_chip_lifted } from "./app_code_lesson_number_chip_lifted.mjs";
import { html_style_grid_cell } from "./html_style_grid_cell.mjs";
import { app_code_lesson_repeat_grid_style } from "./app_code_lesson_repeat_grid_style.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quizzes_unscramble_both } from "./app_code_lesson_quizzes_unscramble_both.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_div_text_code_dark } from "./html_div_text_code_dark.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { range } from "./range.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { add } from "./add.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_number_chip } from "./app_code_lesson_number_chip.mjs";
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
export function app_code_lesson_expression_repeated_generic(words) {
  "a lesson teaching one operator as a shorthand for doing a smaller operator over and over: a ** b is a multiplied by itself b times, a * b is a added to itself b times. The quiz matches the short form against its written-out form, because what is being taught is what the short form MEANS, not the arithmetic value; left number 2..5, count 2..3";
  "Two lessons were this, written out twice, and the copy ran to two hundred and";
  "seventy lines each - the largest repeat in the repo at every width it was";
  "measured at. Nothing about the drawing differed: the same grid, the same black";
  "pill, the same four chip colours, the same running counts underneath with the";
  "last one lifted into a coloured chip. What differed was two operators and five";
  "words, which is what arrives here.";
  "It is one record rather than seven arguments because they are seven pieces of one";
  "thing - the words this lesson is spoken in - and a caller reading a line of seven";
  "bare values cannot tell which is which.";
  let operator = property_get(words, "operator");
  let expand_symbol = property_get(words, "expand_symbol");
  let noun = property_get(words, "noun");
  let noun_upper = property_get(words, "noun_upper");
  let verb = property_get(words, "verb");
  let title_word = property_get(words, "title_word");
  let right_word = property_get(words, "right_word");
  let symbol = property_get(operator, "operator");
  function batch_get() {
    "four questions - four distinct left numbers (so the written-out forms never collide), each with its own random count of 2 or 3 so the length of the written-out form varies; the ANSWER is the written-out form, not the value";
    let lefts = list_shuffle_take([2, 3, 4, 5], 4);
    function to_pair(left) {
      let count = integer_random(2, 3);
      let question = js_code_binary_spaced_nb(left, symbol, count);
      let answer = app_code_lesson_expression_repeated_generic_expanded_code(
        left,
        count,
        expand_symbol,
      );
      let pair = {
        question,
        answer,
      };
      return pair;
    }
    let pairs = list_map(lefts, to_pair);
    return pairs;
  }
  let name_id = app_code_lesson_expression_repeated_generic_title_name_id(
    title_word,
    symbol,
    right_word,
  );
  let example_question_label = app_code_label_code_question();
  let written_out = text_combine_multiple([
    "What is this written out as ",
    noun,
    "? ",
  ]);
  let forwards = {
    question_label: example_question_label,
    on_question: html_text_set_code_dark,
    answer_label: written_out,
    answer_on_button: html_style_code_dark,
    answer_count_override: null,
  };
  let noun_label = text_combine_multiple([noun_upper, ": "]);
  let which_code = text_combine_multiple([
    "Which code uses ",
    symbol,
    " for this? ",
  ]);
  let backwards = {
    question_label: noun_label,
    on_question: html_text_set_code_dark,
    answer_label: which_code,
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
  function above(root) {
    let c = app_code_container_light_blue(root);
    let short_separator = text_combine_multiple([" ", symbol, " "]);
    ("two worked examples, each a left number and a count - four colored numbers in all - given four distinct familiar colours (red, green, blue, amber) so every number is easy to tell apart and no number wears a colour here and another colour there");
    let left_one = app_code_lesson_chip_color(0);
    let count_one = app_code_lesson_chip_color(1);
    let left_two = app_code_lesson_chip_color(2);
    let count_two = app_code_lesson_chip_color(3);
    function chip(parent, number, color) {
      "a standalone color chip sitting in the sentence on the light background, matching a number inside the code";
      let made = app_code_lesson_number_chip(parent, number, color);
      return made;
    }
    function expanded_counted(parent, left, left_color, count_color, count) {
      "the left number repeated and joined by the smaller operator, with the running count 1..count OUTSIDE the code, on the light background below each repeat: row 1 is one continuous black pill (left chips joined by the smaller operator), row 2 holds the counts (no black behind them), the last count in the count colour so how-many visibly becomes the second number of the short form";
      let doubled = multiply(2, count);
      let column_count = add(doubled, 1);
      let end_column = column_count;
      let grid = html_span(parent);
      app_code_lesson_repeat_grid_style(grid, column_count);
      function spacer(column) {
        "a thin empty cell at each end so the black pill has a little padding beyond the outer chips";
        let s = html_span(grid);
        html_style_set(s, "width", "0.3em");
        html_style_grid_cell(s, 1, column);
      }
      function place_repeat(index) {
        let position = add(index, 1);
        let doubled2 = multiply(2, index);
        let column = add(doubled2, 2);
        let chip2 = app_code_lesson_number_chip_lifted(grid, left, left_color);
        html_style_grid_cell(chip2, 2, column);
        let last = equal(position, count);
        let numeral = null;
        if (last) {
          numeral = app_code_lesson_expression_repeated_generic_final_count(
            grid,
            position,
            count_color,
          );
        } else {
          numeral = app_code_lesson_expression_repeated_generic_running_count(
            grid,
            position,
          );
        }
        html_style_grid_cell(numeral, 1, column);
      }
      function place_operator(gap) {
        let doubled3 = multiply(2, gap);
        let column = add(doubled3, 3);
        let op = html_span_text(grid, expand_symbol);
        html_font_color_set(op, "white");
        html_font_jetbrains_mono(op);
        html_style_grid_cell(op, 2, column);
      }
      spacer(1);
      spacer(end_column);
      let list = range(count);
      each(list, place_repeat);
      let count2 = subtract(count, 1);
      let list3 = range(count2);
      each(list3, place_operator);
    }
    let already = text_combine_multiple([
      "You already know how to ",
      verb,
      " numbers like ",
    ]);
    let three_numbers = text_combine_multiple([
      "2 ",
      expand_symbol,
      " 3 ",
      expand_symbol,
      " 4",
    ]);
    html_div_cycle_code(c, [already, three_numbers]);
    let what_if = text_combine_multiple([
      "What if the numbers you ",
      verb,
      " together are all the same number?",
    ]);
    html_div_cycle_code(c, [what_if]);
    let like = html_div(c);
    html_span_text(like, "Like ");
    expanded_counted(like, 2, left_one, count_one, 3);
    let map = html_div(c);
    html_span_text(map, "The ");
    chip(map, 2, left_one);
    html_span_text(map, " appears ");
    chip(map, 3, count_one);
    html_span_text(map, " times, so we can write ");
    app_code_lesson_expression_repeated_generic_short_form(
      map,
      2,
      3,
      left_one,
      count_one,
      short_separator,
    );
    html_span_text(map, " for short");
    let likewise = html_div(c);
    html_span_text(likewise, "Likewise ");
    expanded_counted(likewise, 3, left_two, count_two, 4);
    html_span_text(likewise, " is ");
    app_code_lesson_expression_repeated_generic_short_form(
      likewise,
      3,
      4,
      left_two,
      count_two,
      short_separator,
    );
    let how_many = text_combine_multiple([
      "The second number is how many to ",
      verb,
      " together",
    ]);
    html_div_cycle_code(c, [how_many]);
  }
}
