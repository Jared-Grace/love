import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export function property_list_size(object, property_name) {
  arguments_assert(arguments, 2);
  ("How many things are in the list held under this name.");
  ("Reaching in for a list and then asking its length is two lines that only ever go");
  ("together, and the name in between is invented for the second line and read");
  ("nowhere else.");
  let value = property_get(object, property_name);
  let size = list_size(value);
  return size;
}
