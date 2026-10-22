import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_div } from "./html_div.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { each } from "./each.mjs";
export function app_code_review_explain(parent, lines) {
  arguments_assert(arguments, 2);
  ("the lines a checkpoint says about itself, one row each, straight into the card it is handed - both places that draw them hand it the centered card of bounded width, so the words never run the whole width of a wide screen; a review says nothing, so nothing is drawn for one");
  ("Each line is a list of pieces, and a piece marked code is a code tile. A row rather than a paragraph, so the lines sit single spaced, at the human's request - the card's own gap is what parts them.");
  if (list_empty_is(lines)) {
    return;
  }
  function line_draw(line) {
    let row = html_div(parent);
    function piece_draw(piece) {
      let text = property_get(piece, "text");
      let code = property_get(piece, "code");
      if (code) {
        html_span_text_code_dark(row, text);
        return;
      }
      html_span_text(row, text);
    }
    each(line, piece_draw);
  }
  each(lines, line_draw);
}
