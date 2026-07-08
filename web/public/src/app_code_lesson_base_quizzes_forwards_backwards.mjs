import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_assign } from "../../../love/public/src/object_assign.mjs";
import { app_code_lesson_quiz_token_select } from "../../../love/public/src/app_code_lesson_quiz_token_select.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { app_code_lesson_quiz_multiple_choice } from "../../../love/public/src/app_code_lesson_quiz_multiple_choice.mjs";
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
  let backwards_code = true;
  const backwards = {
    answer_label: backwards_answer_label,
    answer_on_button: backwards_answer_on_button,
    on_question: backwards_on_question,
    question_label: backwards_question_label,
    answer_count_override: backwards_answer_count_override,
    answer_property: "question",
    on_answer: app_code_lesson_quiz_multiple_choice,
  };
  let infos = [
    {
      answer_label: forwards_answer_label,
      answer_on_button: forwards_answer_on_button,
      on_question: forwards_on_question,
      question_label: forwards_question_label,
      answer_count_override: null,
      answer_property: "answer",
      on_answer: app_code_lesson_quiz_multiple_choice,
    },
    backwards,
    token_select,
  ];
  if (backwards_code) {
  }
  let token_select = object_copy(backwards);
  object_assign(token_select, {
    on_answer: app_code_lesson_quiz_token_select,
    answer_label: "Please unscramble the code",
  });
  list_add(infos, token_select);
  let quizzes_get = function lambda(question, answer) {
    function each_info(qa) {
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
    let quizzes = list_map(infos, each_info);
    return quizzes;
  };
  return quizzes_get;
}
