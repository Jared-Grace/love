import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function app_a_keyword_blue(parent, v) {
  let s2 = html_span_text(parent, v);
  const color = "#0003bbff";
  html_font_color_set(s2, color);
}
