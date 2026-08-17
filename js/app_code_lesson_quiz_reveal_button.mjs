import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { emoji_light_bulb } from "./emoji_light_bulb.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
export function app_code_lesson_quiz_reveal_button(r4, parent_container) {
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
  let left = emoji_light_bulb();
  let reveal_button = app_shared_button_wide_text_combine(
    parent_container,
    left,
    " Show me the answer",
    on_reveal,
  );
  let r = {
    quiz_index,
    answer_label,
    qli,
    correction_render,
    on_answer,
    on_question,
    quiz_question,
    answer_property,
    qa_for,
    answers_div,
    answer_label_set,
    container_question,
    reveal_button,
  };
  return r;
}
