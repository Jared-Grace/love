import { app_code_placeholder_color } from "./app_code_placeholder_color.mjs";
import { app_code_string_tile } from "./app_code_string_tile.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { range } from "./range.mjs";
import { each_index } from "./each_index.mjs";
import { equal_not } from "./equal_not.mjs";
export function app_code_string_shape(parent, word_count) {
  "the SHAPE of a string as a code tile: a quote, then word_count groups of ... in the placeholder colour separated by spaces, then a quote. 1 gives a one-word shape, 2 gives a two-word (spaced) shape. Shows the form of a string with the words left as grey placeholders";
  function fill(host) {
    "word_count groups of grey ..., each after the first preceded by a space";
    let groups = range(word_count);
    function group(item, index) {
      "each ... group, with a space before it after the first";
      let later = equal_not(index, 0);
      if (later) {
        html_span_text(host, " ");
      }
      let dots = html_span_text(host, "...");
      let color = app_code_placeholder_color();
      html_font_color_set(dots, color);
    }
    each_index(groups, group);
  }
  let tile = app_code_string_tile(parent, fill);
  return tile;
}
