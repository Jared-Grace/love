import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_span_text_smaller(parent, text) {
  let s = html_span_text(parent, text);
  html_style_font_size(s, "0.75em");
  return s;
}
