import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_style_font_size } from "../../../love/public/src/html_style_font_size.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function app_code_lesson_symbols_digits_numbered() {
  let r5 = app_code_lesson_symbols_digits_generic(noop);
  return r5;
  function on_symbol(parent, index_1) {
    let div4 = html_span_text(parent, index_1);
    html_style_font_size(div4, "0.75em");
    html_font_color_set(div4, "#bbb");
  }
}
