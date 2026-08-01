import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_last } from "./list_last.mjs";
export function list_last_property(list, property_name) {
  arguments_assert(arguments, 2);
  ("The value held under this name on the last thing in a list.");
  ("The mirror of its first-thing sibling, which had been carrying eleven files'");
  ("worth of this pair on its own while the same two lines at the other end of a list");
  ("stayed written out by hand.");
  let last = list_last(list);
  let value = property_get(last, property_name);
  return value;
}
