import {object_property_set} from "./object_property_set.mjs";
import {html_component_element_get} from "./html_component_element_get.mjs";
export function html_disable_set(b, disabled) {
  let b_element = html_component_element_get(b);
  object_property_set(b_element, "disabled", disabled);
}
