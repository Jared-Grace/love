import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_concat } from "./list_concat.mjs";
export function list_concat_property(list, object, property_name) {
  arguments_assert(arguments, 3);
  ("This list with the list held under that name on the end of it.");
  ("The second list is nearly always somewhere further in than the hand holding");
  ("it - the failures a gate reported, the words a function hides the second of");
  ("the two ways, the value beside a key - so it is reached for and joined on in");
  ("the same breath, and it is never wanted standing on its own in between.");
  let tail = property_get(object, property_name);
  let joined = list_concat(list, tail);
  return joined;
}
