import { html_style_margin_top } from "../../../love/public/src/html_style_margin_top.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_span_text_smaller } from "../../../love/public/src/html_span_text_smaller.mjs";
export function app_code_lesson_symbols_digits_numbered_on_symbol(
  parent,
  index_1,
) {
  let d = html_span_text_smaller(parent, index_1);
  html_font_color_set(d, "#bbb");
  html_style_margin_top(d, "-0.25em");
}
