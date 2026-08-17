import { app_code_lesson_quizzes_exercises } from "./app_code_lesson_quizzes_exercises.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_label_code_question } from "./app_code_label_code_question.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
import { app_code_lesson_quiz_choose_operand } from "./app_code_lesson_quiz_choose_operand.mjs";
import { app_code_quiz_correction_operand } from "./app_code_quiz_correction_operand.mjs";
import { app_code_lesson_quiz_token_select } from "./app_code_lesson_quiz_token_select.mjs";
import { list_add } from "./list_add.mjs";
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
  ("the wiring from here on is the same for every lesson - one quiz and one exercise for each kind, all of them reading the one question, the one answer and the one batch - and it is written in the one place the other lessons already go through");
  let quizzes_exercises = app_code_lesson_quizzes_exercises(
    infos,
    batch_get,
    question,
    answer,
  );
  return quizzes_exercises;
}
