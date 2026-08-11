import { app_code_lesson_expression_repeated_generic_expanded_counted } from "./app_code_lesson_expression_repeated_generic_expanded_counted.mjs";
import { app_code_lesson_expression_repeated_generic_short_form } from "./app_code_lesson_expression_repeated_generic_short_form.mjs";
import { app_code_lesson_expression_repeated_generic_expanded_code } from "./app_code_lesson_expression_repeated_generic_expanded_code.mjs";
import { app_code_lesson_expression_repeated_generic_title_name_id } from "./app_code_lesson_expression_repeated_generic_title_name_id.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quizzes_unscramble_both } from "./app_code_lesson_quizzes_unscramble_both.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_div_text_code_dark } from "./html_div_text_code_dark.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { integer_random } from "./integer_random.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_number_chip } from "./app_code_lesson_number_chip.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
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
    app_code_lesson_expression_repeated_generic_expanded_counted(
      like,
      2,
      left_one,
      count_one,
      3,
      expand_symbol,
    );
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
    app_code_lesson_expression_repeated_generic_expanded_counted(
      likewise,
      3,
      left_two,
      count_two,
      4,
      expand_symbol,
    );
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
