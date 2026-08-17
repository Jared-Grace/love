import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_answer_property(r5) {
  arguments_assert(arguments, 1);
  let container_question = property_get(r5, "container_question");
  let answer_label_set = property_get(r5, "answer_label_set");
  let answers_div = property_get(r5, "answers_div");
  let parent_container = property_get(r5, "parent_container");
  let container_correction = property_get(r5, "container_correction");
  let container_success_message = property_get(r5, "container_success_message");
  let quiz_index = property_get(r5, "quiz_index");
  let answer_label = property_get(r5, "answer_label");
  let qli = property_get(r5, "qli");
  let on_reveal = property_get(r5, "on_reveal");
  let r3 = property_get(r5, "r3");
  let correction_render = property_get(r5, "correction_render");
  let on_answer = property_get(r5, "on_answer");
  let on_question = property_get(r5, "on_question");
  let quiz_question = property_get(r5, "quiz_question");
  let answer_property = property_get(r3, "answer_property");
  let r = {
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
    correction_render,
    on_answer,
    on_question,
    quiz_question,
    answer_property,
  };
  return r;
}
