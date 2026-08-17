import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_on_answer } from "./app_code_lesson_quiz_on_answer.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_answer_label(
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
  let r = app_code_lesson_quiz_on_answer(
    info,
    qa,
    container_blue_light,
    question_label,
    parent,
    context,
    quizzes,
    refresh,
  );
  let on_answer = property_get(r, "on_answer");
  let correction_render = property_get(r, "correction_render");
  let answer_property = property_get(r, "answer_property");
  let qa_for = property_get(r, "qa_for");
  let quiz_question = property_get(r, "quiz_question");
  let container_question = property_get(r, "container_question");
  let answer_label_set = property_get(r, "answer_label_set");
  let answers_div = property_get(r, "answers_div");
  let parent_container = property_get(r, "parent_container");
  let container_correction = property_get(r, "container_correction");
  let container_success_message = property_get(r, "container_success_message");
  let quiz_index = property_get(r, "quiz_index");
  let render_next = property_get(r, "render_next");
  let has_next_step = property_get(r, "has_next_step");
  let r3 = property_get(r, "r3");
  let answer_label = property_get(r3, "answer_label");
  let r2 = {
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
    r3,
    answer_label,
  };
  return r2;
}
