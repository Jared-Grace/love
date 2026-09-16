import { html_component_element_get } from "./html_component_element_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function html_element_width_layout(component) {
  arguments_assert(arguments, 1);
  ("How wide the page has LAID an element out, in pixels, ignoring any transform drawn on top");
  ("of it.");
  ("The plain width answer measures what is on the screen, transform and all, which is the");
  ("right answer to what does the reader see and the wrong one to how big is this thing. An");
  ("element carrying a permanent scale - somebody drawn half again as tall as they started -");
  ("comes back larger every time it is scaled again, so anything that measures it and then");
  ("scales from the answer compounds: the second reading is taken through the first result.");
  ("That is a silent fault rather than a visible one, because every single reading is correct");
  ("and only the chain of them is wrong. So reach for this one whenever the measurement is");
  ("going to be MULTIPLIED, and for the plain one when it is going to be compared against");
  ("something else on the screen.");
  ("A COMPONENT is handed in, not a bare element, because this is the twin of `html_element_width` and everything that measures in this repo passes the wrapper. Read straight off the wrapper it asks for a width the wrapper does not have, and the whole page dies on the first measurement.");
  let e = html_component_element_get(component);
  let width = property_get(e, "offsetWidth");
  return width;
}
