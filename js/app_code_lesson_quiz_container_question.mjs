import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_answer_label } from "./app_code_lesson_quiz_answer_label.mjs";
import { app_code_lesson_quiz_on_question } from "./app_code_lesson_quiz_on_question.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_on_reveal } from "./app_code_lesson_quiz_on_reveal.mjs";
export function app_code_lesson_quiz_container_question(
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
  let r = app_code_lesson_quiz_answer_label(
    info,
    qa,
    container_blue_light,
    question_label,
    parent,
    context,
    quizzes,
    refresh,
  );
  let r4 = app_code_lesson_quiz_on_question(r);
  let on_question = property_get(r4, "on_question");
  let on_answer = property_get(r4, "on_answer");
  let correction_render = property_get(r4, "correction_render");
  let r3 = app_code_lesson_quiz_on_reveal(r4);
  let on_reveal = property_get(r3, "on_reveal");
  let qli = property_get(r3, "qli");
  let answer_label = property_get(r3, "answer_label");
  let quiz_index = property_get(r3, "quiz_index");
  let container_success_message = property_get(r3, "container_success_message");
  let container_correction = property_get(r3, "container_correction");
  let parent_container = property_get(r3, "parent_container");
  let answers_div = property_get(r3, "answers_div");
  let answer_label_set = property_get(r3, "answer_label_set");
  let container_question = property_get(r3, "container_question");
  let r2 = {
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
  };
  return r2;
}
