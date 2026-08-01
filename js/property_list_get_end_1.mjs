import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
export function property_list_get_end_1(object, property_name) {
  arguments_assert(arguments, 2);
  ("The second-from-last thing in the list held under this name.");
  ("Every walk over this repo's own source asks a visitor for its stack and then");
  ("steps back one from the end, because the last entry is the node being looked at");
  ("and the one before it is what encloses it. The two lines are written together in");
  ("a dozen files and are never written apart.");
  let list = property_get(object, property_name);
  let value = list_get_end_1(list);
  return value;
}
