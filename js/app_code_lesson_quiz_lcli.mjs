import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_index } from "./app_code_lesson_quiz_index.mjs";
import { property_get } from "./property_get.mjs";
import { list_index_last_is } from "./list_index_last_is.mjs";
import { app_code_lesson_current_number } from "./app_code_lesson_current_number.mjs";
import { app_code_review_due_is } from "./app_code_review_due_is.mjs";
import { app_code_lesson_current_last_is } from "./app_code_lesson_current_last_is.mjs";
export function app_code_lesson_quiz_lcli(
  info,
  qa,
  container_blue_light,
  question_label,
  parent,
  context,
  quizzes,
) {
  arguments_assert(arguments, 7);
  let r4 = app_code_lesson_quiz_index(
    info,
    qa,
    container_blue_light,
    question_label,
    parent,
    context,
  );
  let quiz_index = property_get(r4, "quiz_index");
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
  let qli = list_index_last_is(quizzes, quiz_index);
  let number = app_code_lesson_current_number(context);
  let has_review = app_code_review_due_is(number);
  let lcli = app_code_lesson_current_last_is(context);
  let r = {
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
    answer_label,
    on_question,
    qli,
    has_review,
    lcli,
  };
  return r;
}
