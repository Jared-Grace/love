import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
export function app_code_review_explain(parent, lines) {
  arguments_assert(arguments, 2);
  ("the lines a checkpoint says about itself, one paragraph each, straight into the card it is handed - both places that draw them hand it the centered card of bounded width, so the words never run the whole width of a wide screen; a review says nothing, so nothing is drawn for one");
  if (list_empty_is(lines)) {
    return;
  }
  function line_draw(line) {
    html_p_text(parent, line);
  }
  each(lines, line_draw);
}
