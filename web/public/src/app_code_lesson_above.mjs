import { html_div_code_dark } from "../../../love/public/src/html_div_code_dark.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_medium_blue } from "../../../love/public/src/app_code_container_medium_blue.mjs";
import { app_code_example_answer_gap } from "../../../love/public/src/app_code_example_answer_gap.mjs";
export function app_code_lesson_above(parent, label, question, on_question) {
  app_code_example_answer_gap(parent);
  let container = app_code_container_medium_blue(parent);
  html_div_text(container, label);
  let row = html_div_code_dark(container);
  on_question(row, question);
  let r4 = {
    container,
  };
  return r4;
}
