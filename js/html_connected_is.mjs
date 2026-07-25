import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_connected_is(component) {
  ("is this element still attached to the page? false once something removed it, which is how a forever-running animation loop knows to stop");
  let element = html_component_element_get(component);
  let r = element.isConnected;
  return r;
}
