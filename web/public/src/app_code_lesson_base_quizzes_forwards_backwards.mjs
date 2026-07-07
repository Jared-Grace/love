import { app_code_lesson_quiz } from "../../../love/public/src/app_code_lesson_quiz.mjs";
export function app_code_lesson_base_quizzes_forwards_backwards(
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
          {
            answer_label: forwards_answer_label,
            answer_on_button: forwards_answer_on_button,
            on_question: forwards_on_question,
            question_label: forwards_question_label,
          },
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
          {
            answer_label: backwards_answer_label,
            answer_on_button: backwards_answer_on_button,
            on_question: backwards_on_question,
            question_label: backwards_question_label,
          },
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
