import { html_component_element_get } from "./html_component_element_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function html_scroll_bottom_set(component) {
  "Scrolls one thing that scrolls inside itself all the way down, so what was added to it last is what shows.";
  let element = html_component_element_get(component);
  let height = property_get(element, "scrollHeight");
  property_set(element, "scrollTop", height);
}
