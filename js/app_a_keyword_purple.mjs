import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_a_keyword_purple(parent, keyword) {
  let k = html_span_text(parent, keyword);
  let color = "purple";
  html_font_color_set(k, color);
  return k;
}
