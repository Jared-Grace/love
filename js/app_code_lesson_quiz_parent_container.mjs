import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_quiz_question } from "./app_code_lesson_quiz_quiz_question.mjs";
import { app_code_lesson_quiz_qa_for } from "./app_code_lesson_quiz_qa_for.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_quiz_answer_property } from "./app_code_lesson_quiz_answer_property.mjs";
export function app_code_lesson_quiz_parent_container(r) {
  arguments_assert(arguments, 1);
  let r4 = app_code_lesson_quiz_quiz_question(r);
  let r5 = app_code_lesson_quiz_qa_for(r4);
  let qa_for = property_get(r5, "qa_for");
  let r3 = app_code_lesson_quiz_answer_property(r5);
  let answer_property = property_get(r3, "answer_property");
  let quiz_question = property_get(r3, "quiz_question");
  let on_question = property_get(r3, "on_question");
  let on_answer = property_get(r3, "on_answer");
  let correction_render = property_get(r3, "correction_render");
  let on_reveal = property_get(r3, "on_reveal");
  let qli = property_get(r3, "qli");
  let answer_label = property_get(r3, "answer_label");
  let quiz_index = property_get(r3, "quiz_index");
  let container_success_message = property_get(r3, "container_success_message");
  let container_correction = property_get(r3, "container_correction");
  let parent_container = property_get(r3, "parent_container");
  let r2 = {
    qa_for,
    r3,
    answer_property,
    quiz_question,
    on_question,
    on_answer,
    correction_render,
    on_reveal,
    qli,
    answer_label,
    quiz_index,
    container_success_message,
    container_correction,
    parent_container,
  };
  return r2;
}
