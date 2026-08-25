import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { object_property_names } from "./object_property_names.mjs";
export function object_empty_is(object) {
  arguments_assert(arguments, 1);
  ("Whether an object has nothing in it at all.");
  ("Asked of its names rather than of the object, because an object is never falsy however");
  ("empty it is - so the plain test everybody reaches for first answers yes for the empty");
  ("one and yes again for the full one.");
  let names = object_property_names(object);
  let empty = list_empty_is(names);
  return empty;
}
