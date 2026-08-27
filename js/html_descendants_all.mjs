import { arguments_assert } from "./arguments_assert.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { list_map } from "./list_map.mjs";
import { html_component_wrap } from "./html_component_wrap.mjs";
export function html_descendants_all(component) {
  "every piece anywhere inside a thing, wrappers included, however deeply buried";
  "The sibling that answers only the innermost pieces is for moving things, where a wrapper and its contents would both be moved and the contents would travel twice. This one is for asking each piece a question about itself, and a wrapper has its own answer.";
  arguments_assert(arguments, 1);
  let element = html_component_element_get(component);
  let v = element.querySelectorAll("*");
  let all = Array.from(v);
  let components = list_map(all, html_component_wrap);
  return components;
}
