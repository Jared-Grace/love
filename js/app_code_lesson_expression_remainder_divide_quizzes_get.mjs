import { app_code_lesson_expression_remainder_divide_percent_expression } from "./app_code_lesson_expression_remainder_divide_percent_expression.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_lesson_quiz_multiple_choice } from "./app_code_lesson_quiz_multiple_choice.mjs";
import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { app_code_lesson_expression_remainder_divide_item_qa_for } from "./app_code_lesson_expression_remainder_divide_item_qa_for.mjs";
import { app_code_lesson_expression_remainder_divide_qa_for } from "./app_code_lesson_expression_remainder_divide_qa_for.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_remainder_divide_quizzes_get(
  question,
  answer,
  recognize_decoys,
  backwards_decoys,
  batch_get,
) {
  arguments_assert(arguments, 5);
  ("three quiz kinds: RECOGNISE the remainder formula among wrong rewrites (multiple choice), BUILD it from tokens (unscramble), then BACKWARDS - given the formula, pick the % it equals (14 - Math.floor(14 / 4) * 4 is 14 % 4). Forwards recognise then produce, then connect the long formula to the % shorthand");
  let percent_expression =
    app_code_lesson_expression_remainder_divide_percent_expression(question);
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
