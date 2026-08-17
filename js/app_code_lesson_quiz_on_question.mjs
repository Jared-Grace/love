import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_on_question(r) {
  arguments_assert(arguments, 1);
  let answer_label = property_get(r, "answer_label");
  let r3 = property_get(r, "r3");
  let has_next_step = property_get(r, "has_next_step");
  let render_next = property_get(r, "render_next");
  let quiz_index = property_get(r, "quiz_index");
  let container_success_message = property_get(r, "container_success_message");
  let container_correction = property_get(r, "container_correction");
  let parent_container = property_get(r, "parent_container");
  let answers_div = property_get(r, "answers_div");
  let answer_label_set = property_get(r, "answer_label_set");
  let container_question = property_get(r, "container_question");
  let quiz_question = property_get(r, "quiz_question");
  let qa_for = property_get(r, "qa_for");
  let answer_property = property_get(r, "answer_property");
  let correction_render = property_get(r, "correction_render");
  let on_answer = property_get(r, "on_answer");
  let on_question = property_get(r3, "on_question");
  let r2 = {
    answer_label,
    r3,
    has_next_step,
    render_next,
    quiz_index,
    container_success_message,
    container_correction,
    parent_container,
    answers_div,
    answer_label_set,
    container_question,
    quiz_question,
    qa_for,
    answer_property,
    correction_render,
    on_answer,
    on_question,
  };
  return r2;
}
