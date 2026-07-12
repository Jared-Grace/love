import { function_is_assert } from "./function_is_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_on(component, name_event, lambda) {
  function_is_assert(lambda);
  let element = html_component_element_get(component);
  element.addEventListener(name_event, lambda);
}
