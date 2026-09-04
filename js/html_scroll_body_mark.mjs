import { arguments_assert } from "./arguments_assert.mjs";
import { html_scroll_body_attribute_name } from "./html_scroll_body_attribute_name.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_scroll_body_mark(component) {
  "Says of one box that it is the one this frame scrolls, so that whatever is added to the page later can be put at the end of the reading rather than under it.";
  "The mark carries no value. There is one such box on a page and the question asked of it is only whether it is there, so a value would be a second thing to keep in step with nothing to say.";
  arguments_assert(arguments, 1);
  let name = html_scroll_body_attribute_name();
  html_attribute_set(component, name, "");
}
