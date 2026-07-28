import { app_code_string_tile } from "./app_code_string_tile.mjs";
import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_string_value_shape(parent) {
  "a string shape whose ... is coloured as the VALUE (value-blue), not the grey placeholder - shown right after the definition so the learner sees that the value is exactly the part between the quotes, in the value colour";
  function fill(host) {
    "the ... standing for the value, in the value colour";
    let dots = html_span_text(host, "...");
    let color = app_code_string_value_color();
    html_font_color_set(dots, color);
  }
  let tile = app_code_string_tile(parent, fill);
  return tile;
}
