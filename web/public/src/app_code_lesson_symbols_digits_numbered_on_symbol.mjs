import { app_code_symbol_separated_margin_y } from "../../../love/public/src/app_code_symbol_separated_margin_y.mjs";
import { html_style_margin_top } from "../../../love/public/src/html_style_margin_top.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_span_text_smaller } from "../../../love/public/src/html_span_text_smaller.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_code_lesson_symbols_digits_numbered_on_symbol(
  parent,
  index_,
) {
  let d = html_span_text_smaller(parent, index_);
  html_font_color_set(d, "rgba(255, 255, 255, 0.733333)");
  let value = app_code_symbol_separated_margin_y();
  html_style_margin_top(d, text_combine("-", value));
}
