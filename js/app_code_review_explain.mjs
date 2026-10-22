import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { each } from "./each.mjs";
export function app_code_review_explain(parent, lines) {
  arguments_assert(arguments, 2);
  ("the lines a checkpoint says about itself, one paragraph each; a review says nothing, so nothing is drawn for one - not even an empty box, which would push what is under it down");
  if (list_empty_is(lines)) {
    return;
  }
  let c = app_code_container_padded_x(parent);
  function line_draw(line) {
    html_p_text(c, line);
  }
  each(lines, line_draw);
}
