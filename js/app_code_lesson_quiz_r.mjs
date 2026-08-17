import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_container_success_message } from "./app_code_lesson_quiz_container_success_message.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_r(
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
  let r4 = app_code_lesson_quiz_container_success_message(
    info,
    qa,
    container_blue_light,
    question_label,
    parent,
    context,
    quizzes,
    refresh,
  );
  let container_success_message = property_get(r4, "container_success_message");
  let container_correction = property_get(r4, "container_correction");
  let parent_container = property_get(r4, "parent_container");
  let answers_div = property_get(r4, "answers_div");
  let answer_label_set = property_get(r4, "answer_label_set");
  let container_question = property_get(r4, "container_question");
  let quiz_question = property_get(r4, "quiz_question");
  let qa_for = property_get(r4, "qa_for");
  let answer_property = property_get(r4, "answer_property");
  let correction_render = property_get(r4, "correction_render");
  let on_answer = property_get(r4, "on_answer");
  let answer_label = property_get(r4, "answer_label");
  let on_question = property_get(r4, "on_question");
  let qli = property_get(r4, "qli");
  let on_next = property_get(r4, "on_next");
  let last_lesson_end = property_get(r4, "last_lesson_end");
  let r = property_get(r4, "r");
  let r2 = {
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
    answer_label,
    on_question,
    qli,
    on_next,
    last_lesson_end,
    r,
  };
  return r2;
}
