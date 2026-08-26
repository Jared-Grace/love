import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_reveal_button } from "./app_code_lesson_quiz_reveal_button.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
export function app_code_lesson_quiz_value(r4, parent_container) {
  arguments_assert(arguments, 2);
  let quiz_index2 = property_get(r4, "quiz_index");
  let answer_label2 = property_get(r4, "answer_label");
  let qli2 = property_get(r4, "qli");
  let on_reveal = property_get(r4, "on_reveal");
  let correction_render2 = property_get(r4, "correction_render");
  let on_answer2 = property_get(r4, "on_answer");
  let on_question2 = property_get(r4, "on_question");
  let quiz_question2 = property_get(r4, "quiz_question");
  let answer_property2 = property_get(r4, "answer_property");
  let r32 = property_get(r4, "r3");
  let qa_for2 = property_get(r4, "qa_for");
  let answers_div2 = property_get(r32, "answers_div");
  let answer_label_set2 = property_get(r32, "answer_label_set");
  let container_question2 = property_get(r32, "container_question");
  let reveal_button2 = app_code_quiz_reveal_button(parent_container, on_reveal);
  let r2 = {
    quiz_index: quiz_index2,
    answer_label: answer_label2,
    qli: qli2,
    correction_render: correction_render2,
    on_answer: on_answer2,
    on_question: on_question2,
    quiz_question: quiz_question2,
    answer_property: answer_property2,
    qa_for: qa_for2,
    answers_div: answers_div2,
    answer_label_set: answer_label_set2,
    container_question: container_question2,
    reveal_button: reveal_button2,
  };
  let r3 = r2;
  let reveal_button = property_get(r3, "reveal_button");
  let container_question = property_get(r3, "container_question");
  let answer_label_set = property_get(r3, "answer_label_set");
  let answers_div = property_get(r3, "answers_div");
  let qa_for = property_get(r3, "qa_for");
  let answer_property = property_get(r3, "answer_property");
  let quiz_question = property_get(r3, "quiz_question");
  let on_question = property_get(r3, "on_question");
  let on_answer = property_get(r3, "on_answer");
  let correction_render = property_get(r3, "correction_render");
  let qli = property_get(r3, "qli");
  let answer_label = property_get(r3, "answer_label");
  let quiz_index = property_get(r3, "quiz_index");
  let value = app_shared_spaced_gap();
  let r = {
    reveal_button,
    container_question,
    answer_label_set,
    answers_div,
    qa_for,
    answer_property,
    quiz_question,
    on_question,
    on_answer,
    correction_render,
    qli,
    answer_label,
    quiz_index,
    value,
  };
  return r;
}
