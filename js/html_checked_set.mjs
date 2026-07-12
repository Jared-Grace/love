import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_checked_set(input, value) {
  arguments_assert(arguments, 2);
  let element = html_component_element_get(input);
  property_set(element, "checked", value);
}
