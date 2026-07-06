import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_code_lesson_base } from "../../../love/public/src/app_code_lesson_base.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { app_code_lesson_quiz } from "../../../love/public/src/app_code_lesson_quiz.mjs";
export function app_code_lesson_base_quizzes(
  question,
  answer,
  quiz_label,
  on_quiz_answer_button_forwards,
  on_question,
  question_label,
  batch_get,
  quiz_backwards_label_answer,
  on_quiz_answer_button_backwards,
  quiz_backwards_answer_count_override,
) {
  const quizzes = [
    function quiz_forwards(context, parent, container, refresh) {
      let quiz_question = question;
      let quiz_answer = answer;
      const answer_property = "answer";
      app_code_lesson_quiz(
        container,
        quiz_question,
        answer_property,
        quiz_answer,
        parent,
        quiz_forwards,
        context,
        refresh,
        quiz_label,
        on_quiz_answer_button_forwards,
        on_question,
        question_label,
        batch_get,
        answer_count_override,
      );
    },
  ];
  let nn = null_not_is(quiz_backwards_label_answer);
  if (nn) {
    function quiz_backwards(context, parent, container, refresh) {
      log(app_code_lesson_base_quizzes.name, "quiz_backwards");
      let quiz_question = answer;
      let quiz_answer = question;
      const answer_property = "question";
      app_code_lesson_quiz(
        container,
        quiz_question,
        answer_property,
        quiz_answer,
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
    }
    list_add(quizzes, quiz_backwards);
  }
  return quizzes;
}
