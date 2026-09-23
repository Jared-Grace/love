import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_on_size_change(component, lambda) {
  "runs something each time one element changes size, and hands back what stops it.";
  "A window's own resize event misses most of what moves a page: a chapter drawn in after a fetch, a picture that finishes loading, a line that wraps once a font arrives. The element itself knows when it has grown, so this asks it.";
  arguments_assert(arguments, 2);
  let element = html_component_element_get(component);
  ("What it runs is put off to the next frame rather than run the moment the size is reported. What is run here usually changes a size in turn - a spacer taking a row's height, a button shown or hidden - and a size changed while sizes are still being reported makes the browser give up on the rest of that report and raise it as an error, which these pages show to the reader.");
  function later() {
    requestAnimationFrame(lambda);
  }
  let observer = new ResizeObserver(later);
  observer.observe(element);
  function remove() {
    observer.disconnect();
  }
  return remove;
}
