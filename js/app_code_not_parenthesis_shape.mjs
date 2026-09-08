import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
import { js_code_parenthesis_right } from "./js_code_parenthesis_right.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_placeholder_dots } from "./app_code_placeholder_dots.mjs";
import { app_code_code_tile } from "./app_code_code_tile.mjs";
export function app_code_not_parenthesis_shape(parent) {
  "the shape !( ... ) as ONE code tile: the mark, the parentheses it stands in front of, and a grey gap standing where the part it turns over goes";
  "HELD IN ONE PLACE BECAUSE TWO LESSONS DRAW IT - the one that first puts a ! in front of parentheses, and the one that later puts a joined pair inside them. The second is showing the learner a shape they have already met, and it is recognised as the same shape only if it is drawn the same way down to the grey.";
  "The pieces are separate spans rather than one string because a chip made from one string is one colour all the way across, and the whole of what this shape says is that the gap is a different colour from the punctuation around it.";
  arguments_assert(arguments, 1);
  function fill(host) {
    let symbol = js_operator_bang_symbol();
    let left_parenthesis = js_code_parenthesis_left();
    let right_parenthesis = js_code_parenthesis_right();
    html_span_text(host, symbol);
    html_span_text(host, left_parenthesis);
    app_code_placeholder_dots(host);
    html_span_text(host, right_parenthesis);
  }
  let tile = app_code_code_tile(parent, fill);
  return tile;
}
