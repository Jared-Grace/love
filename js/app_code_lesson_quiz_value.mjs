import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_quiz_reveal_button } from "./app_code_quiz_reveal_button.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
export function app_code_lesson_quiz_value(r4, parent_container) {
  arguments_assert(arguments, 2);
  let quiz_index = property_get(r4, "quiz_index");
  let answer_label = property_get(r4, "answer_label");
  let qli = property_get(r4, "qli");
  let on_reveal = property_get(r4, "on_reveal");
  let correction_render = property_get(r4, "correction_render");
  let on_answer = property_get(r4, "on_answer");
  let on_question = property_get(r4, "on_question");
  let quiz_question = property_get(r4, "quiz_question");
  let answer_property = property_get(r4, "answer_property");
  let r3 = property_get(r4, "r3");
  let qa_for = property_get(r4, "qa_for");
  let answers_div = property_get(r3, "answers_div");
  let answer_label_set = property_get(r3, "answer_label_set");
  let container_question = property_get(r3, "container_question");
  let reveal_button = app_code_quiz_reveal_button(parent_container, on_reveal);
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
