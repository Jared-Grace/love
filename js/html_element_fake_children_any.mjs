import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function html_element_fake_children_any(element) {
  arguments_assert(arguments, 1);
  ("Whether anything was appended under a stand-in element.");
  let children = property_get(element, "children");
  let r = list_empty_not_is(children);
  return r;
}
