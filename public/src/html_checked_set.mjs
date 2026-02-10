import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_checked_set(input, value) {
  assert_arguments(arguments, 2);
  let element = html_component_element_get(input);
  property_set(element, "checked", value);
}
