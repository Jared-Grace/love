import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_remove(component) {
  let element = html_component_element_get(component);
  let remove_listeners = element.remove_listeners;
  let has_listeners = remove_listeners !== undefined;
  if (has_listeners) {
    remove_listeners();
  }
  element.remove();
}
