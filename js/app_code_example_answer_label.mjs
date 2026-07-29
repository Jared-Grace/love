import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_code_label_text } from "./app_code_label_text.mjs";
export function app_code_example_answer_label(a_container, quiz_label) {
  let d = app_code_label_text(a_container, quiz_label);
  html_style_margin_top(d, "0.4em");
}
