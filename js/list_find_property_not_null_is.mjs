import { arguments_assert } from "./arguments_assert.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function list_find_property_not_null_is(list, property, value) {
  arguments_assert(arguments, 3);
  ("Whether anything in a list carries a given value under a given name.");
  ("Whether an app is already known to the watcher, whether a toggle is already");
  ("switched on, whether a folder is already among the ones chosen. Each looks");
  ("through a list for the one item that matches and then throws that item away,");
  ("because the only thing wanted is whether it was there at all.");
  let found = list_find_property_or_null(list, property, value);
  let there = null_not_is(found);
  return there;
}
