import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_qa_for(r4) {
  arguments_assert(arguments, 1);
  let quiz_question = property_get(r4, "quiz_question");
  let on_question = property_get(r4, "on_question");
  let on_answer = property_get(r4, "on_answer");
  let correction_render = property_get(r4, "correction_render");
  let r3 = property_get(r4, "r3");
  let on_reveal = property_get(r4, "on_reveal");
  let qli = property_get(r4, "qli");
  let answer_label = property_get(r4, "answer_label");
  let quiz_index = property_get(r4, "quiz_index");
  let container_success_message = property_get(r4, "container_success_message");
  let container_correction = property_get(r4, "container_correction");
  let parent_container = property_get(r4, "parent_container");
  let answers_div = property_get(r4, "answers_div");
  let answer_label_set = property_get(r4, "answer_label_set");
  let container_question = property_get(r4, "container_question");
  let qa_for = property_get(r3, "qa_for");
  let r = {
    quiz_question,
    on_question,
    on_answer,
    correction_render,
    r3,
    on_reveal,
    qli,
    answer_label,
    quiz_index,
    container_success_message,
    container_correction,
    parent_container,
    answers_div,
    answer_label_set,
    container_question,
    qa_for,
  };
  return r;
}
