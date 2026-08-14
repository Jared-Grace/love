import { js_operator_bang_double_equal_symbol } from "./js_operator_bang_double_equal_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_code_not_parenthesis_wrapped } from "./js_code_not_parenthesis_wrapped.mjs";
import { app_code_lesson_expression_not_equal_same_intro } from "./app_code_lesson_expression_not_equal_same_intro.mjs";
import { app_code_lesson_expression_not_equal_same_title_name_id } from "./app_code_lesson_expression_not_equal_same_title_name_id.mjs";
import { app_code_comparison_pair_equality } from "./app_code_comparison_pair_equality.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quizzes_unscramble_both } from "./app_code_lesson_quizzes_unscramble_both.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { html_div_text_code_dark } from "./html_div_text_code_dark.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_expression_not_equal_same() {
  "the derivation the curriculum promised out loud and had not kept: a !== b is the same line as !(a === b). When !== was first taught it was deliberately framed as asking whether two sides are DIFFERENT - an everyday primitive standing beside SAME - and not as the negation of ===, because that reading needs a ! around a whole comparison and there was no lesson for one. There is now, immediately before this, so the promise can be paid.";
  "The quiz matches the two forms against each other rather than asking for a value, because what is being taught is that the two spellings mean one thing. A value question would be answered correctly by a learner who never noticed they were the same line.";
  "Both truths appear across a screen: sides that are the same and sides that are different. Neither changes what the answer is - the answer is the other spelling either way - but a learner who only ever saw one would have no reason to believe the match holds generally.";
  let different_symbol = js_operator_bang_double_equal_symbol();
  let same_symbol = js_operator_triple_equal_symbol();
  let bang_symbol = js_operator_bang_symbol();
  function short_form(left, right) {
    "a !== b, the spelling the learner already has";
    let code = app_code_operator_code(left, different_symbol, right);
    return code;
  }
  function long_form(left, right) {
    "!(a === b), the same line spelled with a ! around an ===";
    let inner = app_code_operator_code(left, same_symbol, right);
    let code = js_code_not_parenthesis_wrapped(inner);
    return code;
  }
  function batch_get() {
    "four questions, two with sides that are the same and two with sides that differ";
    let pair = app_code_comparison_pair_equality();
    let wants = [false, true, false, true];
    function to_pair(want_same) {
      let sides = pair(want_same);
      let input = property_get(sides, "left");
      let left = text_to(input);
      let input2 = property_get(sides, "right");
      let right = text_to(input2);
      let question = short_form(left, right);
      let answer = long_form(left, right);
      let built = {
        question,
        answer,
      };
      return built;
    }
    let pairs = list_map(wants, to_pair);
    return pairs;
  }
  let example_question_label = app_code_label_code_question();
  let written_with = text_combine_multiple([
    "Written with ",
    bang_symbol,
    ": ",
  ]);
  let which_code = text_combine_multiple([
    "Which code uses ",
    different_symbol,
    " for this? ",
  ]);
  let forwards = {
    question_label: example_question_label,
    on_question: html_text_set_code_dark,
    answer_label: written_with,
    answer_on_button: html_style_code_dark,
    answer_count_override: null,
  };
  let backwards = {
    question_label: written_with,
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
  let name_id = app_code_lesson_expression_not_equal_same_title_name_id();
  let lesson = app_code_lesson_base(
    name_id,
    app_code_lesson_expression_not_equal_same_intro,
    2,
    batch_get,
    html_text_set_code_dark,
    written_with,
    quizzes_get,
    example_question_label,
    html_div_text_code_dark,
  );
  return lesson;
}
