import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_attribute_get(component, key) {
  let element = html_component_element_get(component);
  let value = element.getAttribute(key);
  return value;
}
