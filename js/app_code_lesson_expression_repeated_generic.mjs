import { app_code_lesson_expression_repeated_generic_above } from "./app_code_lesson_expression_repeated_generic_above.mjs";
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
import { html_style_code_dark } from "./html_style_code_dark.mjs";
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
    let r = app_code_lesson_expression_repeated_generic_above(
      root,
      symbol,
      verb,
      expand_symbol,
    );
    return r;
  }
}
