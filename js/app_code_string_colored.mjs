import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { app_code_string_tile } from "./app_code_string_tile.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_string_colored(parent, word) {
  "a string literal as a code tile with the quotes in the default code colour and the VALUE (the text between them) in the value colour, so the value stands out as distinct from the quotes";
  function fill(host) {
    "the value word, in the value colour";
    let inner = html_span_text(host, word);
    let color = app_code_string_value_color();
    html_font_color_set(inner, color);
  }
  let tile = app_code_string_tile(parent, fill);
  return tile;
}
