import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function app_a_keyword_blue(parent, text) {
  let s2 = html_span_text(parent, text);
  const color = "#0000baff";
  html_font_color_set(s2, color);
}
