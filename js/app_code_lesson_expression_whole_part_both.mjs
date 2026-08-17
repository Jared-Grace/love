import { app_code_lesson_expression_whole_part_both_above } from "./app_code_lesson_expression_whole_part_both_above.mjs";
import { app_code_lesson_expression_whole_part_both_decoys_backwards } from "./app_code_lesson_expression_whole_part_both_decoys_backwards.mjs";
import { app_code_lesson_expression_whole_part_both_decoys } from "./app_code_lesson_expression_whole_part_both_decoys.mjs";
import { app_code_lesson_expression_whole_part_both_title_name_id } from "./app_code_lesson_expression_whole_part_both_title_name_id.mjs";
import { app_code_uneven_dividend } from "./app_code_uneven_dividend.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { text_to } from "./text_to.mjs";
import { list_map } from "./list_map.mjs";
import { noop } from "./noop.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
export function app_code_lesson_expression_whole_part_both() {
  "the THIRD whole-part lesson: DO BOTH steps at once. Given a division a / b, the learner gives its whole part value directly (rewrite with the formula Math.floor(a / b) * b, then evaluate). The answer is the whole part quotient*divisor - NOT what a / b evaluates to - so this is an explicit-answer multiple choice, not an eval lesson. Tailored decoys are the tempting partial answers: the quotient (rounded down but not multiplied back), the remainder, and the raw decimal division";
  function make(divisor, quotient) {
    "given a / b whose dividend is quotient*divisor + a leftover, the answer is the whole part quotient*divisor";
    let parts = app_code_uneven_dividend(quotient, divisor);
    let dividend = property_get(parts, "dividend");
    let division = js_code_binary_spaced_nb(dividend, "/", divisor);
    let whole_part = property_get(parts, "whole_part");
    let r = {
      question: division,
      answer: text_to(whole_part),
    };
    return r;
  }
  function batch_get() {
    "the shared integer-division-family batch: four different divisors, one a quotient-0 division (whose whole part is 0)";
    let list = app_code_lesson_divisor_quotient_batch(make);
    return list;
  }
  function decoys(question, answer) {
    let r4 = app_code_lesson_expression_whole_part_both_decoys(
      question,
      answer,
    );
    return r4;
  }
  function decoys_backwards(whole_part_text, division) {
    let r5 = app_code_lesson_expression_whole_part_both_decoys_backwards(
      whole_part_text,
      division,
    );
    return r5;
  }
  let example_answer_label = "Whole part: ";
  let example_question_label = app_code_label_code_question();
  function quizzes_get(question, answer) {
    "two quiz kinds: forwards (given the division, choose its whole part value) then backwards (given a whole part value, choose which division has it - the other batch divisions are the distractors, so no tailored decoys are needed)";
    let forwards = {
      question_label: app_code_label_code_question(),
      on_question: html_text_set_code_dark,
      answer_label: "What is the whole part? ",
      answer_on_button: noop,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_multiple_choice,
      decoys,
    };
    let backwards = {
      question_label: "Whole part: ",
      on_question: app_code_style_normal_text,
      answer_label: "Which division has this whole part? ",
      answer_on_button: html_text_set_code_dark,
      answer_count_override: null,
      answer_property: "question",
      on_answer: app_code_lesson_quiz_multiple_choice,
      decoys: decoys_backwards,
    };
    let infos = [forwards, backwards];
    function each_info(info) {
      function quiz(context, parent, container, refresh, next_get) {
        app_code_lesson_quiz(
          container,
          {
            question,
            answer,
          },
          parent,
          context,
          refresh,
          info,
          batch_get,
          quizzes,
          next_get,
        );
      }
      return quiz;
    }
    let quizzes = list_map(infos, each_info);
    function each_exercise(info) {
      let exercise = {
        info,
        question,
        answer,
        batch_get,
      };
      return exercise;
    }
    let exercises = list_map(infos, each_exercise);
    let quizzes_exercises = {
      quizzes,
      exercises,
    };
    return quizzes_exercises;
  }
  let name_id = app_code_lesson_expression_whole_part_both_title_name_id();
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch_get,
    html_text_set_code_dark,
    example_answer_label,
    quizzes_get,
    example_question_label,
    app_code_style_normal_text,
  );
  return lesson;
  function above(root) {
    let r2 = app_code_lesson_expression_whole_part_both_above(root);
    return r2;
  }
}
