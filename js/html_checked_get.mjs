import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_checked_get(input) {
  arguments_assert(arguments, 1);
  let element = html_component_element_get(input);
  let value = property_get(element, "checked");
  return value;
}
