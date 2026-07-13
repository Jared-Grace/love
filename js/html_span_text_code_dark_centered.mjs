import { html_style_assign } from "./html_style_assign.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function html_span_text_code_dark_centered(parent, text) {
  let s = html_span_text_code_dark(parent, text);
  html_style_set(s, "align-self", "center");
}
