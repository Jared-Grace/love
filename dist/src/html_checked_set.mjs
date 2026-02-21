import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_checked_set(input, value) {
  arguments_assert(arguments, 2);
  let element = html_component_element_get(input);
  property_set(element, "checked", value);
}
