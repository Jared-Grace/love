import { app_code_style_normal } from "./app_code_style_normal.mjs";
import { html_div_text } from "./html_div_text.mjs";
export function app_code_style_normal_text(container, answer) {
  let answer_div = html_div_text(container, answer);
  app_code_style_normal(answer_div);
}
