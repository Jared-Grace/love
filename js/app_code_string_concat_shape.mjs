import { app_code_string_concat_tile } from "./app_code_string_concat_tile.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_placeholder_color } from "./app_code_placeholder_color.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_string_concat_shape(parent) {
  "the shape of a string concatenation as ONE code tile: two quoted grey placeholders joined by a plus, so it reads as one piece of code rather than three separate tiles";
  let placeholder_color = app_code_placeholder_color();
  function dots(host) {
    "the grey dots standing in for the text of one string";
    let d = html_span_text(host, "...");
    html_font_color_set(d, placeholder_color);
  }
  let tile = app_code_string_concat_tile(parent, dots, dots);
  return tile;
}
