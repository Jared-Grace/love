import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_listener_remove(c, type, handler) {
  let element = html_component_element_get(c);
  element.removeEventListener(type, handler);
}
