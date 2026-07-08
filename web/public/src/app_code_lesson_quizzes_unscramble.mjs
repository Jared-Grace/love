import { app_code_lesson_quizzes_generic } from "../../../love/public/src/app_code_lesson_quizzes_generic.mjs";
export function app_code_lesson_quizzes_unscramble(
  batch_get,
  forwards_question_label,
  forwards_on_question,
  forwards_answer_label,
  forwards_answer_on_button,
  backwards_question_label,
  backwards_on_question,
  backwards_answer_label,
  backwards_answer_on_button,
  backwards_answer_count_override,
) {
  let backwards_code = true;
  let quizzes_get = app_code_lesson_quizzes_generic(
    backwards_answer_label,
    backwards_answer_on_button,
    backwards_on_question,
    backwards_question_label,
    backwards_answer_count_override,
    forwards_answer_label,
    forwards_answer_on_button,
    forwards_on_question,
    forwards_question_label,
    backwards_code,
    batch_get,
    false,
  );
  return quizzes_get;
}
