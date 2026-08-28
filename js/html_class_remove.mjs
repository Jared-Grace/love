import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_class_remove(component, name) {
  arguments_assert(arguments, 2);
  ("Takes one class name off an element, and says nothing where it was never on.");
  ("The twin of the adder next door, and it exists for the cases where a class is worn for");
  ("a moment rather than for the life of the element - a rule held over the page while");
  ("something is rearranged, and let go the instant it is done.");
  let element = html_component_element_get(component);
  element.classList.remove(name);
}
