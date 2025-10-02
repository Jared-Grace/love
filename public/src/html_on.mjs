import { function_is } from "../../../karate_code/public/src/function_is.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { html_component_element_get } from "../../../love/public/src/html_component_element_get.mjs";
export function html_on(component, name_event, lambda) {
  let fi = function_is(lambda);
  assert(fi);
  let element = html_component_element_get(component);
  element.addEventListener(name_event, lambda);
}
