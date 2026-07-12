import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_container_medium_blue } from "./app_code_container_medium_blue.mjs";
import { app_code_example_answer_gap } from "./app_code_example_answer_gap.mjs";
export function app_code_lesson_above(parent, label, question, on_question) {
  app_code_example_answer_gap(parent);
  let container = app_code_container_medium_blue(parent);
  html_div_text(container, label);
  let container_question = html_div(container);
  on_question(container_question, question);
  let r = {
    container,
    container_question,
  };
  return r;
}
