import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_attribute_remove(component, key) {
  ("$plain key");
  ("take an attribute off an element, whether or not it was there");
  arguments_assert(arguments, 2);
  let element = html_component_element_get(component);
  element.removeAttribute(key);
}
