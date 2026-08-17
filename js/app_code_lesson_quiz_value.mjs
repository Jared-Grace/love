import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_reveal_button } from "./app_code_lesson_quiz_reveal_button.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
export function app_code_lesson_quiz_value(r4, parent_container) {
  arguments_assert(arguments, 2);
  let r3 = app_code_lesson_quiz_reveal_button(r4, parent_container);
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
