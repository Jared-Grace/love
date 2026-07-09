import { property_set } from "../../../love/public/src/property_set.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_scroll_top_set(component, scroll_top) {
  let element = html_component_element_get(component);
  property_set(element, "scrollTop", scroll_top);
}
