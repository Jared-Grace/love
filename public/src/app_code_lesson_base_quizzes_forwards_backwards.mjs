import { app_code_lesson_quiz } from "../../../love/public/src/app_code_lesson_quiz.mjs";
export function app_code_lesson_base_quizzes_forwards_backwards(
  label_answer_forwards,
  on_quiz_answer_button_forwards,
  on_question_forwards,
  label_question_forwards,
  batch_get,
  label_answer_backwards,
  on_quiz_answer_button_backwards,
  quiz_backwards_answer_count_override,
  label_question_backwards,
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
          label_answer_forwards,
          on_quiz_answer_button_forwards,
          on_question_forwards,
          label_question_forwards,
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
          label_answer_backwards,
          on_quiz_answer_button_backwards,
          on_question_backwards,
          label_question_backwards,
          batch_get,
          quiz_backwards_answer_count_override,
          quizzes,
        );
      },
    ];
    return quizzes;
  };
  return quizzes_get;
}
