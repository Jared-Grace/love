import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_quiz_question(r) {
  arguments_assert(arguments, 1);
  let container_question = property_get(r, "container_question");
  let answer_label_set = property_get(r, "answer_label_set");
  let answers_div = property_get(r, "answers_div");
  let parent_container = property_get(r, "parent_container");
  let container_correction = property_get(r, "container_correction");
  let container_success_message = property_get(r, "container_success_message");
  let quiz_index = property_get(r, "quiz_index");
  let answer_label = property_get(r, "answer_label");
  let qli = property_get(r, "qli");
  let on_reveal = property_get(r, "on_reveal");
  let r3 = property_get(r, "r3");
  let correction_render = property_get(r, "correction_render");
  let on_answer = property_get(r, "on_answer");
  let on_question = property_get(r, "on_question");
  let quiz_question = property_get(r3, "quiz_question");
  let r2 = {
    container_question,
    answer_label_set,
    answers_div,
    parent_container,
    container_correction,
    container_success_message,
    quiz_index,
    answer_label,
    qli,
    on_reveal,
    r3,
    correction_render,
    on_answer,
    on_question,
    quiz_question,
  };
  return r2;
}
