import { list_random_item } from "./list_random_item.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_expression_repeated_generic_expanded_code } from "./app_code_lesson_expression_repeated_generic_expanded_code.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_lesson_expression_repeated_generic_lefts } from "./app_code_lesson_expression_repeated_generic_lefts.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { list_shuffle_take_map } from "./list_shuffle_take_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_code_lesson_expression_repeated_generic_title_name_id } from "./app_code_lesson_expression_repeated_generic_title_name_id.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { app_code_lesson_quizzes_unscramble_both } from "./app_code_lesson_quizzes_unscramble_both.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { html_div_text_code_dark } from "./html_div_text_code_dark.mjs";
import { app_code_lesson_expression_repeated_generic_above } from "./app_code_lesson_expression_repeated_generic_above.mjs";
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
  "★ THE TWO WORKED EXAMPLES ARE CHOSEN, NOT DRAWN. They were the first two of the random four, so a learner could be shown 3 * 2 and then 4 * 2 - two lines differing by one digit, teaching the shorthand once and the count not at all. A chosen pair moves BOTH numbers between the two examples, so what varies is visible from the examples alone.";
  "The rest of the batch is one question for each left number the chosen pair did not use, so all four questions still carry four different left numbers and no two written-out forms collide. Nothing here says how many are chosen or how many are left: the chosen ones name their own left numbers and the leftovers are whatever remains, so a lesson choosing a third example needs no second change.";
  let operator = property_get(words, "operator");
  let expand_symbol = property_get(words, "expand_symbol");
  let noun = property_get(words, "noun");
  let noun_upper = property_get(words, "noun_upper");
  let verb = property_get(words, "verb");
  let title_word = property_get(words, "title_word");
  let examples = property_get(words, "examples");
  property_get(words, "right_word");
  let symbol = property_get(operator, "operator");
  function pair_of(chosen) {
    "one question from a left number and a count: the short form, answered by the written-out form and never by the value";
    let left = list_get(chosen, 0);
    let count = list_get(chosen, 1);
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
  function pair_drawn(left) {
    "a question on a left number the chosen examples did not use, with its own count of 2 or 3 so the length of the written-out form varies";
    "never a count equal to the left number: 2 ** 2 is 4 and so are 2 * 2 and 2 + 2, so that line cannot show what the shorthand means";
    function count_other_is(candidate) {
      let b = equal(candidate, left);
      let other = not(b);
      return other;
    }
    let counts = list_filter([2, 3], count_other_is);
    let count = list_random_item(counts);
    let chosen = [left, count];
    let pair = pair_of(chosen);
    return pair;
  }
  function chosen_left_of(chosen) {
    "the left number one of the chosen examples uses";
    let left = list_get(chosen, 0);
    return left;
  }
  function batch_get() {
    "the chosen examples first, because the front page shows the batch from its start, then one question for each left number left over";
    let chosen_lefts = list_map(examples, chosen_left_of);
    function left_free_is(left) {
      "a left number none of the chosen examples has taken";
      let left_untaken = list_includes_not(chosen_lefts, left);
      return left_untaken;
    }
    let lefts = app_code_lesson_expression_repeated_generic_lefts();
    let free = list_filter(lefts, left_free_is);
    let free_count = list_size(free);
    let shown = list_map(examples, pair_of);
    let rest = list_shuffle_take_map(free, free_count, pair_drawn);
    let pairs = list_concat(shown, rest);
    return pairs;
  }
  let name_id = app_code_lesson_expression_repeated_generic_title_name_id(
    title_word,
    symbol,
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
