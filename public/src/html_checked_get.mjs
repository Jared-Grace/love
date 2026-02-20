import { property_get } from "../../../love/public/src/property_get.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_checked_get(input) {
  arguments_assert(arguments, 1);
  let element = html_component_element_get(input);
  let value2 = property_get(element, "checked");
  return value2;
}
