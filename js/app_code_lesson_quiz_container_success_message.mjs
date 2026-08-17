import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_no_more } from "./app_code_lesson_quiz_no_more.mjs";
import { app_code_lesson_quiz_last_lesson_end } from "./app_code_lesson_quiz_last_lesson_end.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_container_success_message(
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
  let r4 = app_code_lesson_quiz_no_more(
    info,
    qa,
    container_blue_light,
    question_label,
    parent,
    context,
    quizzes,
  );
  let r = app_code_lesson_quiz_last_lesson_end(r4, context, quizzes, refresh);
  let last_lesson_end = property_get(r, "last_lesson_end");
  let on_next = property_get(r, "on_next");
  let qli = property_get(r, "qli");
  let on_question = property_get(r, "on_question");
  let answer_label = property_get(r, "answer_label");
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
  let r2 = {
    r,
    last_lesson_end,
    on_next,
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
  };
  return r2;
}
