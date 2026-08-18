import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_correction_render } from "./app_code_lesson_quiz_correction_render.mjs";
export function app_code_lesson_quiz_container_correction(r) {
  arguments_assert(arguments, 1);
  let r2 = property_get(r, "r2");
  let answer_label = property_get(r, "answer_label");
  let r3 = app_code_lesson_quiz_correction_render(r, r2);
  let correction_render = property_get(r3, "correction_render");
  let on_answer = property_get(r3, "on_answer");
  let on_question = property_get(r3, "on_question");
  let quiz_question = property_get(r3, "quiz_question");
  let answer_property = property_get(r3, "answer_property");
  let qa_for = property_get(r3, "qa_for");
  let answers_div = property_get(r3, "answers_div");
  let container_correction = property_get(r3, "container_correction");
  let r4 = {
    answer_label,
    r3,
    correction_render,
    on_answer,
    on_question,
    quiz_question,
    answer_property,
    qa_for,
    answers_div,
    container_correction,
  };
  return r4;
}
