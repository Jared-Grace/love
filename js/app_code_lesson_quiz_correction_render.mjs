import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_correction_render(r, r2) {
  arguments_assert(arguments, 2);
  let quiz_index = property_get(r, "quiz_index");
  let container_success_message = property_get(r, "container_success_message");
  let container_correction = property_get(r, "container_correction");
  let answers_div = property_get(r2, "answers_div");
  let qa_for = property_get(r2, "qa_for");
  let answer_property = property_get(r2, "answer_property");
  let quiz_question = property_get(r2, "quiz_question");
  let on_question = property_get(r2, "on_question");
  let on_answer = property_get(r2, "on_answer");
  let correction_render = property_get(r2, "correction_render");
  let r3 = {
    quiz_index,
    container_success_message,
    container_correction,
    answers_div,
    qa_for,
    answer_property,
    quiz_question,
    on_question,
    on_answer,
    correction_render,
  };
  return r3;
}
