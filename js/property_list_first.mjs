import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
export function property_list_first(object, property_name) {
  arguments_assert(arguments, 2);
  ("The first thing in the list held under this name.");
  ("A record keeps a list and the reader wants the one at the front of it - the goal");
  ("being worked on, the error to show, the match to take. The list in between is");
  ("given a name that nothing else ever reads.");
  let list = property_get(object, property_name);
  let first = list_first(list);
  return first;
}
