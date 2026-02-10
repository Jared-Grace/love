import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_scroll_top_get(component) {
  let element = html_component_element_get(component);
  let scroll_top = property_get(element, "scrollTop");
  return scroll_top;
}
