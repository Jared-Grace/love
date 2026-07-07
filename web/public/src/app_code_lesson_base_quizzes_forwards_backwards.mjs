import { app_code_lesson_quiz } from "../../../love/public/src/app_code_lesson_quiz.mjs";
export function app_code_lesson_base_quizzes_forwards_backwards(
  forwards_label_answer,
  forwards_on_quiz_answer_button,
  on_question_forwards,
  forwards_question_label,
  batch_get,
  backwards_answer_label,
  backwards_answer_on_button,
  backwards_answer_count_override,
  backwards_question_label,
  backwards_on_question,
) {
  let quizzes_get = function lambda(question, answer) {
    let quizzes = null;
    quizzes = [
      function quiz_forwards(context, parent, container, refresh) {
        app_code_lesson_quiz(
          container,
          question,
          "answer",
          answer,
          parent,
          context,
          refresh,
          forwards_label_answer,
          forwards_on_quiz_answer_button,
          on_question_forwards,
          forwards_question_label,
          batch_get,
          null,
          quizzes,
        );
      },
      function quiz_backwards(context, parent, container, refresh) {
        app_code_lesson_quiz(
          container,
          answer,
          "question",
          question,
          parent,
          context,
          refresh,
          backwards_answer_label,
          backwards_answer_on_button,
          backwards_on_question,
          backwards_question_label,
          batch_get,
          backwards_answer_count_override,
          quizzes,
        );
      },
    ];
    return quizzes;
  };
  return quizzes_get;
}
