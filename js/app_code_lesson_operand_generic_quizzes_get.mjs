import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_lesson_quiz_choose_operand } from "./app_code_lesson_quiz_choose_operand.mjs";
import { app_code_quiz_correction_operand } from "./app_code_quiz_correction_operand.mjs";
import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { list_add } from "./list_add.mjs";
import { app_code_lesson_quiz } from "./app_code_lesson_quiz.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_lesson_operand_generic_quizzes_get(
  question,
  answer,
  answer_label,
  role,
  unscramble,
  example_answer_label,
  batch_get,
) {
  arguments_assert(arguments, 7);
  let forwards = {
    question_label: app_code_label_code_question(),
    on_question: html_text_set_code_dark,
    answer_label,
    answer_on_button: null,
    answer_count_override: null,
    answer_property: "answer",
    on_answer: app_code_lesson_quiz_choose_operand,
    correction: app_code_quiz_correction_operand(role),
  };
  let infos = [forwards];
  if (unscramble) {
    ("the backward direction of the same idea: instead of picking which number is the role, the learner is TOLD the role's number (the prompt shows it) and builds the division from its pieces - answer_property 'question' makes the code to build the division itself (14 / 4), and since / is not commutative only the dividend-first order is accepted, so placing the given number correctly is the whole test");
    let build = {
      question_label: example_answer_label,
      on_question: html_text_set_code_dark,
      answer_label: "Please build the code: ",
      answer_on_button: null,
      answer_count_override: null,
      answer_property: "question",
      on_answer: app_code_lesson_quiz_token_select,
      correction: app_code_quiz_correction_operand(role),
    };
    list_add(infos, build);
  }
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
