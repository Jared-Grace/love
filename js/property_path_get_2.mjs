import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export function property_path_get_2(item, name_outer, name_inner) {
  arguments_assert(arguments, 3);
  ("The value held under the second name, inside the value held under the first.");
  ("Reading one step in and then one step further is the most repeated pair of lines");
  ("in the repo, and every one of them has to invent a name for the thing in the");
  ("middle - a name nothing else ever reads, chosen only because a line needed a");
  ("left-hand side.");
  ("Its sibling walks a list of any length. This one takes the two names as");
  ("arguments, and is written as the two steps rather than as a call to that sibling,");
  ("because a body written the way its callers write it is the only body the fold can");
  ("recognise in them.");
  let outer = property_get(item, name_outer);
  let inner = property_get(outer, name_inner);
  return inner;
}
