import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function app_a_keyword_purple(parent, keyword) {
  let k = html_span_text(parent, keyword);
  const color = "purple";
  html_font_color_set(k, color);
  return k;
}
