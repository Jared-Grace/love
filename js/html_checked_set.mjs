import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_checked_set(input, value) {
  assert_arguments(arguments, 2);
  marker("1");
  let element = html_component_element_get(input);
  object_property_set(element, "checked", value);
}
