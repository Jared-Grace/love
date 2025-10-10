import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_checked_get(input) {
  assert_arguments(arguments, 1);
  marker("1");
  let element = html_component_element_get(input);
  let value2 = object_property_get(element, "checked");
  return value2;
}
