import { assert } from "../../../love/public/src/assert.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_on(component, name_event, lambda) {
  assert(b);
  let element = html_component_element_get(component);
  element.addEventListener(name_event, lambda);
}
