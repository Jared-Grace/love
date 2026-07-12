import { property_get } from "./property_get.mjs";
export function html_component_element_get(component) {
  let element = property_get(component, "element");
  return element;
}
