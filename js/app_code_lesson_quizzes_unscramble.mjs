import { app_code_lesson_quizzes_generic } from "./app_code_lesson_quizzes_generic.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quizzes_unscramble(params) {
  let batch_get = property_get(params, "batch_get");
  let forwards_question_label = property_get(params, "forwards_question_label");
  let forwards_on_question = property_get(params, "forwards_on_question");
  let forwards_answer_label = property_get(params, "forwards_answer_label");
  let forwards_answer_on_button = property_get(
    params,
    "forwards_answer_on_button",
  );
  let backwards_question_label = property_get(
    params,
    "backwards_question_label",
  );
  let backwards_on_question = property_get(params, "backwards_on_question");
  let backwards_answer_label = property_get(params, "backwards_answer_label");
  let backwards_answer_on_button = property_get(
    params,
    "backwards_answer_on_button",
  );
  let backwards_answer_count_override = property_get(
    params,
    "backwards_answer_count_override",
  );
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
