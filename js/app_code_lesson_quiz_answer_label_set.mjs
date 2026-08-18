import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_container_question } from "./app_code_lesson_quiz_container_question.mjs";
import { app_code_lesson_quiz_parent_container } from "./app_code_lesson_quiz_parent_container.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_value } from "./app_code_lesson_quiz_value.mjs";
import { app_code_lesson_quiz_on_qa_change } from "./app_code_lesson_quiz_on_qa_change.mjs";
export function app_code_lesson_quiz_answer_label_set(
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
  let r = app_code_lesson_quiz_container_question(
    info,
    qa,
    container_blue_light,
    question_label,
    parent,
    context,
    quizzes,
    refresh,
  );
  let r4 = app_code_lesson_quiz_parent_container(r);
  let parent_container = property_get(r4, "parent_container");
  let container_correction = property_get(r4, "container_correction");
  let container_success_message = property_get(r4, "container_success_message");
  let r3 = app_code_lesson_quiz_value(r4, parent_container);
  let value = property_get(r3, "value");
  let quiz_index = property_get(r3, "quiz_index");
  let answer_label = property_get(r3, "answer_label");
  let qli = property_get(r3, "qli");
  let r2 = app_code_lesson_quiz_on_qa_change(
    r3,
    value,
    qli,
    context,
    parent_container,
    quiz_index,
    quizzes,
    refresh,
    container_success_message,
  );
  let container_question = property_get(r2, "container_question");
  let answer_label_set = property_get(r2, "answer_label_set");
  let r5 = {
    container_correction,
    container_success_message,
    quiz_index,
    answer_label,
    r2,
    container_question,
    answer_label_set,
  };
  return r5;
}
