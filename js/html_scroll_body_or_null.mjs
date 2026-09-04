import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_scroll_body_attribute_name } from "./html_scroll_body_attribute_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { null_is } from "./null_is.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
export function html_scroll_body_or_null(root) {
  "The box this page scrolls inside, when the page is built that way, and nothing at all when the page itself is what scrolls.";
  "BESPOKE (querySelector), do NOT auto-canonicalize";
  "NOTHING IS THE ORDINARY ANSWER and not a failure. Most screens here let the page scroll the way every plain web page does, and on those there is no such box and nothing to find - so a caller reads the answer as which of the two kinds of page it is standing on, rather than as something having gone wrong.";
  arguments_assert(arguments, 1);
  let element = html_component_element_get(root);
  let name = html_scroll_body_attribute_name();
  let selector = text_combine_multiple(["[", name, "]"]);
  let found = element.querySelector(selector);
  let none = null_is(found);
  if (none) {
    return null;
  }
  let body = html_component_wrap(found);
  return body;
}
