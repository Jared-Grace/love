import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function property_list_empty_is(object, property_name) {
  arguments_assert(arguments, 2);
  ("Whether the list a record keeps under a name has nothing in it.");
  ("Whether a call was written with no arguments at all, whether a piece of text");
  ("has no code spliced into it, whether a rewrite moved nothing. Each reaches in");
  ("for a list only to find out that it is empty, and an empty list is the whole");
  ("answer, so the list itself is never looked at further.");
  let list = property_get(object, property_name);
  let none = list_empty_is(list);
  return none;
}
