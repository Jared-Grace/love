import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_code_label_text } from "./app_code_label_text.mjs";
export function app_code_example_answer_label(a_container, quiz_label) {
  "the label over the answers, handed back so a quiz that works its question out in steps can say something new in it as the steps go";
  let d = app_code_label_text(a_container, quiz_label);
  let value = app_shared_content_edge_gap();
  html_style_margin_top(d, value);
  return d;
}
