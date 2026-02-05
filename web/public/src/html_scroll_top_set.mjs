import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_scroll_top_set(component, scroll_top) {
  let element2 = html_component_element_get(component);
  object_property_set(element2, "scrollTop", scroll_top);
}
