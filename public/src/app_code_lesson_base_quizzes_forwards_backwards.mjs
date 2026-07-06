import { app_code_lesson_quiz } from "../../../love/public/src/app_code_lesson_quiz.mjs";
export function app_code_lesson_base_quizzes_forwards_backwards(
  quiz_label,
  on_quiz_answer_button_forwards,
  on_question,
  question_label,
  batch_get,
  quiz_backwards_label_answer,
  on_quiz_answer_button_backwards,
  quiz_backwards_answer_count_override,
) {
  let quizzes_get = function lambda(question, answer) {
    const quizzes = [
      function quiz_forwards(context, parent, container, refresh) {
        let quiz_question = question;
        let question = answer;
        const answer_property = "answer";
        app_code_lesson_quiz(
          container,
          quiz_question,
          answer_property,
          question,
          parent,
          quiz_forwards,
          context,
          refresh,
          quiz_label,
          on_quiz_answer_button_forwards,
          on_question,
          question_label,
          batch_get,
          null,
        );
      },
      function quiz_backwards(context, parent, container, refresh) {
        let quiz_question = answer;
        const answer_property = "question";
        app_code_lesson_quiz(
          container,
          answer,
          answer_property,
          question,
          parent,
          quiz_backwards,
          context,
          refresh,
          quiz_backwards_label_answer,
          on_quiz_answer_button_backwards,
          on_question,
          question_label,
          batch_get,
          quiz_backwards_answer_count_override,
        );
      },
    ];
    return quizzes;
  };
  return quizzes_get;
}
