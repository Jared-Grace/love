import { property_set } from "../../../love/public/src/property_set.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_disable_set(b, disabled) {
  let b_element = html_component_element_get(b);
  property_set(b_element, "disabled", disabled);
}
