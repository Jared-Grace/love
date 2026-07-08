import { list_map } from "../../../love/public/src/list_map.mjs";
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
  let infos = [
    {
      answer_label: forwards_answer_label,
      answer_on_button: forwards_answer_on_button,
      on_question: forwards_on_question,
      question_label: forwards_question_label,
      answer_count_override: null,
      answer_property: "answer",
    },
    {
      answer_label: backwards_answer_label,
      answer_on_button: backwards_answer_on_button,
      on_question: backwards_on_question,
      question_label: backwards_question_label,
      answer_count_override: backwards_answer_count_override,
      answer_property: "question",
    },
  ];
  let quizzes_get = function lambda(question, answer) {
    function lambda2(qa) {
      let r = function quiz(context, parent, container, refresh, next_get) {
        app_code_lesson_quiz(
          container,
          {
            question,
            answer,
          },
          parent,
          context,
          refresh,
          qa,
          batch_get,
          quizzes,
          next_get,
        );
      };
      return r;
    }
    let quizzes = list_map(infos, lambda2);
    return quizzes;
  };
  return quizzes_get;
}
