import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_on_size_change(component, lambda) {
  "runs something each time one element changes size, and hands back what stops it.";
  "A window's own resize event misses most of what moves a page: a chapter drawn in after a fetch, a picture that finishes loading, a line that wraps once a font arrives. The element itself knows when it has grown, so this asks it.";
  arguments_assert(arguments, 2);
  let element = html_component_element_get(component);
  let observer = new ResizeObserver(lambda);
  observer.observe(element);
  function remove() {
    observer.disconnect();
  }
  return remove;
}
