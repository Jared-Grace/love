import {html_component_element_get} from "./html_component_element_get.mjs";
export function html_on(component, name_event, lambda) {
  let element = html_component_element_get(component);
  element.on(name_event, lambda);
}
