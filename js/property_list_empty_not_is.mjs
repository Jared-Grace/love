import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function property_list_empty_not_is(object, property_name) {
  arguments_assert(arguments, 2);
  ("Whether a record carries anything at all in the list it keeps under a name.");
  ("Whether a player has anything left to go over, whether a search turned up any");
  ("verses in a book, whether a function hides any name belonging to the repo.");
  ("Each reaches in for a list only to ask whether it is empty, and the list");
  ("itself is not what the answer is about.");
  let list = property_get(object, property_name);
  let any = list_empty_not_is(list);
  return any;
}
