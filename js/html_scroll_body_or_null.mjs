import { arguments_assert } from "./arguments_assert.mjs";
import { html_scroll_body_attribute_name } from "./html_scroll_body_attribute_name.mjs";
import { html_marked_or_null } from "./html_marked_or_null.mjs";
export function html_scroll_body_or_null(root) {
  "The box this page scrolls inside, when the page is built that way, and nothing at all when the page itself is what scrolls.";
  "NOTHING IS THE ORDINARY ANSWER and not a failure. Most screens here let the page scroll the way every plain web page does, and on those there is no such box and nothing to find - so a caller reads the answer as which of the two kinds of page it is standing on, rather than as something having gone wrong.";
  arguments_assert(arguments, 1);
  let name = html_scroll_body_attribute_name();
  let body = html_marked_or_null(root, name);
  return body;
}
