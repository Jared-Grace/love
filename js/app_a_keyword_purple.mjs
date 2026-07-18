import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_shared_color_keyword } from "./app_shared_color_keyword.mjs";
export function app_a_keyword_purple(parent, keyword) {
  let k = html_span_text(parent, keyword);
  let color = app_shared_color_keyword();
  html_font_color_set(k, color);
  return k;
}
