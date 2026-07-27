import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_string_colored(parent, word) {
  "a string literal as a code tile with the quotes in the default code colour and the VALUE (the text between them) in the value colour, so the value stands out as distinct from the quotes";
  let quote = '"';
  let tile = html_span(parent);
  html_style_code_dark_nowrap(tile);
  html_span_text(tile, quote);
  let inner = html_span_text(tile, word);
  let color = app_code_string_value_color();
  html_font_color_set(inner, color);
  html_span_text(tile, quote);
  return tile;
}
