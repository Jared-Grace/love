import { html_font_color_set_white } from "../../../love/public/src/html_font_color_set_white.mjs";
import { html_font_jetbrains_mono } from "../../../love/public/src/html_font_jetbrains_mono.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function app_code_symbol(parent, text) {
  let span = html_span_text(parent, text);
  html_font_jetbrains_mono(span);
  html_font_color_set_white(span);
  return span;
}
