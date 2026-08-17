import { app_code_lesson_expression_remainder_divide_make } from "./app_code_lesson_expression_remainder_divide_make.mjs";
import { app_code_lesson_expression_remainder_divide_backwards_decoys } from "./app_code_lesson_expression_remainder_divide_backwards_decoys.mjs";
import { app_code_lesson_expression_remainder_divide_recognize_decoys } from "./app_code_lesson_expression_remainder_divide_recognize_decoys.mjs";
import { app_code_lesson_expression_remainder_divide_above } from "./app_code_lesson_expression_remainder_divide_above.mjs";
import { app_code_lesson_expression_remainder_divide_item_qa_for } from "./app_code_lesson_expression_remainder_divide_item_qa_for.mjs";
import { app_code_lesson_expression_remainder_divide_qa_for } from "./app_code_lesson_expression_remainder_divide_qa_for.mjs";
import { app_code_lesson_expression_remainder_divide_title_name_id } from "./app_code_lesson_expression_remainder_divide_title_name_id.mjs";
import { js_operator_percent_sign } from "./js_operator_percent_sign.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_base } from "./app_code_lesson_base.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
import { app_code_lesson_divisor_quotient_batch } from "./app_code_lesson_divisor_quotient_batch.mjs";
import { text_integers } from "./text_integers.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_remainder_divide() {
  "BUILD the remainder-by-dividing formula from a division a / b: the remainder is a - Math.floor(a / b) * b (the dividend minus its whole part). First RECOGNISE the formula among tempting wrong rewrites (multiple choice), then BUILD it from tokens (unscramble) - recognise before produce, easy before hard. The next lesson EVALUATES this formula. Uses the shared divisor/quotient batch so a quotient-0 division can appear; divisor 3..6";
  let percent = js_operator_percent_sign();
  function make(divisor, quotient) {
    let r = app_code_lesson_expression_remainder_divide_make(divisor, quotient);
    return r;
  }
  function batch_get() {
    "the shared integer-division-family batch: four different divisors, one a quotient-0 division";
    let list = app_code_lesson_divisor_quotient_batch(make);
    return list;
  }
  let example_answer_label = "Remainder formula: ";
  let example_question_label = app_code_label_code_question();
  function recognize_decoys(question, answer) {
    let r5 = app_code_lesson_expression_remainder_divide_recognize_decoys(
      question,
      answer,
    );
    return r5;
  }
  function backwards_decoys(shown_formula, answer_percent) {
    let r2 = app_code_lesson_expression_remainder_divide_backwards_decoys(
      shown_formula,
      answer_percent,
    );
    return r2;
  }
  function quizzes_get(question, answer) {
    "three quiz kinds: RECOGNISE the remainder formula among wrong rewrites (multiple choice), BUILD it from tokens (unscramble), then BACKWARDS - given the formula, pick the % it equals (14 - Math.floor(14 / 4) * 4 is 14 % 4). Forwards recognise then produce, then connect the long formula to the % shorthand";
    let nums = text_integers(question);
    let dividend = list_get(nums, 0);
    let divisor = list_get(nums, 1);
    let percent_expression = js_code_binary_spaced_nb(dividend, "%", divisor);
    let recognize = {
      question_label: app_code_label_code_question(),
      on_question: html_text_set_code_dark,
      answer_label: "Which is the remainder formula? ",
      answer_on_button: html_text_set_code_dark,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_multiple_choice,
      decoys: recognize_decoys,
    };
    let build = {
      question_label: app_code_label_code_question(),
      on_question: html_text_set_code_dark,
      answer_label: "Build the remainder formula: ",
      answer_on_button: null,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_token_select,
    };
    let backwards = {
      question_label: "Formula: ",
      on_question: html_text_set_code_dark,
      answer_label: "Which is this the same as? ",
      answer_on_button: html_text_set_code_dark,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_multiple_choice,
      decoys: backwards_decoys,
      backwards: true,
      qa_for: app_code_lesson_expression_remainder_divide_item_qa_for,
    };
    let infos = [recognize, build, backwards];
    function each_info(info) {
      let quiz_qa = app_code_lesson_expression_remainder_divide_qa_for(
        info,
        question,
        answer,
        percent_expression,
      );
      function quiz(context, parent, container, refresh, next_get) {
        app_code_lesson_quiz(
          container,
          quiz_qa,
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
      let quiz_qa = app_code_lesson_expression_remainder_divide_qa_for(
        info,
        question,
        answer,
        percent_expression,
      );
      let exercise = {
        info,
        question: property_get(quiz_qa, "question"),
        answer: property_get(quiz_qa, "answer"),
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
  function example_answer(parent, text) {
    ("render the formula as a code chip on its OWN fresh div - passing ",
      html_text_set_code_dark.name,
      " straight to ",
      app_code_lesson_base.name,
      " would clear the shared example container (wiping the Code label and the division already rendered there) and leave only the formula");
    let div = html_div(parent);
    html_text_set_code_dark(div, text);
  }
  let name_id =
    app_code_lesson_expression_remainder_divide_title_name_id(percent);
  let lesson = app_code_lesson_base(
    name_id,
    above,
    2,
    batch_get,
    html_text_set_code_dark,
    example_answer_label,
    quizzes_get,
    example_question_label,
    example_answer,
  );
  return lesson;
  function above(root) {
    let r4 = app_code_lesson_expression_remainder_divide_above(root);
    return r4;
  }
}
