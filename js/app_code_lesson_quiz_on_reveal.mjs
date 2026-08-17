import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_advance_or_no_more } from "./app_code_advance_or_no_more.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { app_code_lesson_quiz_show_correction } from "./app_code_lesson_quiz_show_correction.mjs";
export function app_code_lesson_quiz_on_reveal(r4) {
  arguments_assert(arguments, 1);
  let answer_property = property_get(r4, "answer_property");
  let qa_for = property_get(r4, "qa_for");
  let quiz_question = property_get(r4, "quiz_question");
  let container_question = property_get(r4, "container_question");
  let answer_label_set = property_get(r4, "answer_label_set");
  let answers_div = property_get(r4, "answers_div");
  let parent_container = property_get(r4, "parent_container");
  let container_correction = property_get(r4, "container_correction");
  let container_success_message = property_get(r4, "container_success_message");
  let quiz_index = property_get(r4, "quiz_index");
  let render_next = property_get(r4, "render_next");
  let has_next_step = property_get(r4, "has_next_step");
  let r3 = property_get(r4, "r3");
  let answer_label = property_get(r4, "answer_label");
  let qli = property_get(r3, "qli");
  app_code_advance_or_no_more(parent_container, has_next_step, render_next);
  function on_reveal() {
    "for a learner who is stuck: reveal the correction (the code and its output) so they can see the answer, then continue with Next; wrong attempts alone no longer reveal it";
    html_visibility_hidden(container_success_message);
    app_code_lesson_quiz_show_correction(container_correction);
  }
  let r = {
    answer_property,
    qa_for,
    quiz_question,
    container_question,
    answer_label_set,
    answers_div,
    parent_container,
    container_correction,
    container_success_message,
    quiz_index,
    answer_label,
    qli,
    on_reveal,
  };
  return r;
}
