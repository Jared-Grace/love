import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_a_keyword_blue(parent, text) {
  let span = html_span_text(parent, text);
  let color = "#0000baff";
  html_font_color_set(span, color);
  return span;
}
