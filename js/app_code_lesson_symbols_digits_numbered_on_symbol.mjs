import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text_smaller } from "./html_span_text_smaller.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_lesson_symbols_digits_numbered_on_symbol(
  parent,
  index_,
) {
  let d = html_span_text_smaller(parent, index_);
  html_font_color_set(d, "rgba(255, 255, 255, 0.733333)");
  let value = app_shared_spaced_tiny_gap();
  let value2 = text_combine("-", value);
  html_style_margin_top(d, value2);
}
