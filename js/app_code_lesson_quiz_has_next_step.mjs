import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_render_next } from "./app_code_lesson_quiz_render_next.mjs";
import { not } from "./not.mjs";
export function app_code_lesson_quiz_has_next_step(r4, r, last_lesson_end) {
  arguments_assert(arguments, 3);
  let on_next = property_get(r4, "on_next");
  let qli = property_get(r4, "qli");
  let on_question = property_get(r4, "on_question");
  let answer_label = property_get(r4, "answer_label");
  let on_answer = property_get(r4, "on_answer");
  let correction_render = property_get(r4, "correction_render");
  let answer_property = property_get(r4, "answer_property");
  let qa_for = property_get(r4, "qa_for");
  let quiz_question = property_get(r4, "quiz_question");
  let container_question = property_get(r4, "container_question");
  let answer_label_set = property_get(r4, "answer_label_set");
  let answers_div = property_get(r4, "answers_div");
  let parent_container = property_get(r4, "parent_container");
  let container_correction = property_get(r4, "container_correction");
  let container_success_message = property_get(r4, "container_success_message");
  let quiz_index = property_get(r, "quiz_index");
  function render_next(next_parent) {
    let r3 = app_code_lesson_quiz_render_next(next_parent, on_next);
    return r3;
  }
  let has_next_step = not(last_lesson_end);
  let r2 = {
    qli,
    on_question,
    answer_label,
    on_answer,
    correction_render,
    answer_property,
    qa_for,
    quiz_question,
    container_question,
    answer_label_set,
    answers_div,
    parent_container,
    container_correction,
    container_success_message,
    quiz_index,
    render_next,
    has_next_step,
  };
  return r2;
}
