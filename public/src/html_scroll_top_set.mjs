import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_scroll_top_set(content, element, scrollTop) {
  let element2 = html_component_element_get(content);
  object_property_set(element, "scrollTop", scrollTop);
}
