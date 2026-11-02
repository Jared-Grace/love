import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function html_element_fake_children_any(element) {
  arguments_assert(arguments, 1);
  ("Whether anything was appended under a stand-in element.");
  let r = property_list_empty_not_is(element, "children");
  return r;
}
