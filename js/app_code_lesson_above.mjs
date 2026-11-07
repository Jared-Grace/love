import { html_div } from "./html_div.mjs";
import { app_learn_js_label_text } from "./app_learn_js_label_text.mjs";
import { app_learn_js_container_medium_blue } from "./app_learn_js_container_medium_blue.mjs";
import { app_learn_js_example_answer_gap } from "./app_learn_js_example_answer_gap.mjs";
export function app_code_lesson_above(parent, label, question, on_question) {
  app_learn_js_example_answer_gap(parent);
  let container = app_learn_js_container_medium_blue(parent);
  app_learn_js_label_text(container, label);
  let container_question = html_div(container);
  ("the whole card is handed over as well as the place the question goes, so a lesson that needs to say something ABOVE the label has somewhere to put it; every lesson that does not need it simply takes two arguments and never sees the third");
  on_question(container_question, question, container);
  let r = {
    container,
    container_question,
  };
  return r;
}
