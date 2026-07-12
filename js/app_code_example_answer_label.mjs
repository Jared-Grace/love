import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_div_text } from "./html_div_text.mjs";
export function app_code_example_answer_label(a_container, quiz_label) {
  let d = html_div_text(a_container, quiz_label);
  html_style_margin_top(d, "0.4em");
}
