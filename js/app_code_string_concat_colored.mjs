import { app_code_string_concat_tile } from "./app_code_string_concat_tile.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_string_concat_colored(parent, left, right) {
  "a worked string concatenation as ONE code tile - the two words joined by a plus, each word coloured value-blue inside its quotes so the values being combined stand out, while the quotes and the plus stay in the ordinary code colour";
  let value_color = app_code_string_value_color();
  function value_fill(word) {
    "a fill that draws one value word in value-blue inside its quotes";
    function fill(host) {
      let inner = html_span_text(host, word);
      html_font_color_set(inner, value_color);
    }
    return fill;
  }
  let left_fill = value_fill(left);
  let right_fill = value_fill(right);
  let tile = app_code_string_concat_tile(parent, left_fill, right_fill);
  return tile;
}
