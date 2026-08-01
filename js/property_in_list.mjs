import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
export function property_in_list(object, property_name, list) {
  arguments_assert(arguments, 3);
  ("Whether what is held under this name is one of the things in this list.");
  ("Reaching in for a value and then asking whether a list holds it is how every");
  ("membership test in this repo is written, and the name in the middle is always the");
  ("property's own name said twice.");
  let value = property_get(object, property_name);
  let inside = list_includes(list, value);
  return inside;
}
