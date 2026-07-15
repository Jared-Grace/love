import { function_is_assert_json } from "./function_is_assert_json.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
export function html_on(component, name_event, lambda) {
  function_is_assert_json(lambda, {
    hint: "the event handler should be a function to attach to the element",
    name_event,
  });
  let element = html_component_element_get(component);
  element.addEventListener(name_event, lambda);
  function remove() {
    element.removeEventListener(name_event, lambda);
  }
  return remove;
}
