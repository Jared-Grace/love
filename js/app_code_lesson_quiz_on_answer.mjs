import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_r } from "./app_code_lesson_quiz_r.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_has_next_step } from "./app_code_lesson_quiz_has_next_step.mjs";
export function app_code_lesson_quiz_on_answer(
  info,
  qa,
  container_blue_light,
  question_label,
  parent,
  context,
  quizzes,
  refresh,
) {
  arguments_assert(arguments, 8);
  let r4 = app_code_lesson_quiz_r(
    info,
    qa,
    container_blue_light,
    question_label,
    parent,
    context,
    quizzes,
    refresh,
  );
  let r = property_get(r4, "r");
  let last_lesson_end = property_get(r4, "last_lesson_end");
  let r3 = app_code_lesson_quiz_has_next_step(r4, r, last_lesson_end);
  let has_next_step = property_get(r3, "has_next_step");
  let render_next = property_get(r3, "render_next");
  let quiz_index = property_get(r3, "quiz_index");
  let container_success_message = property_get(r3, "container_success_message");
  let container_correction = property_get(r3, "container_correction");
  let parent_container = property_get(r3, "parent_container");
  let answers_div = property_get(r3, "answers_div");
  let answer_label_set = property_get(r3, "answer_label_set");
  let container_question = property_get(r3, "container_question");
  let quiz_question = property_get(r3, "quiz_question");
  let qa_for = property_get(r3, "qa_for");
  let answer_property = property_get(r3, "answer_property");
  let correction_render = property_get(r3, "correction_render");
  let on_answer = property_get(r3, "on_answer");
  let r2 = {
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
  };
  return r2;
}
