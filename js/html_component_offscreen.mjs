import { arguments_assert } from "./arguments_assert.mjs";
import { html_document_offscreen_ensure } from "./html_document_offscreen_ensure.mjs";
import { html_element_offscreen } from "./html_element_offscreen.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
export function html_component_offscreen() {
  arguments_assert(arguments, 0);
  ("somewhere to draw into that is not on a screen: a fresh box, wrapped the way every drawing atom in this repo expects its parent to be wrapped");
  ("This is the one door into drawing without a browser, and it puts the page with no screen behind it in place first - so a caller asks for a box and gets a box, rather than having to know that a page has to exist before a box can be made.");
  html_document_offscreen_ensure();
  let element = html_element_offscreen("div");
  let component = html_component_wrap(element);
  return component;
}
