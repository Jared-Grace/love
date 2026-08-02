import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
export function property_list_get(object, property_name, index) {
  arguments_assert(arguments, 3);
  ("The thing at this place in the list held under this name.");
  ("The plain member of the family the end-counted one belongs to, for a place the");
  ("caller counts from the front. The list in between is given a name that nothing");
  ("else ever reads.");
  let list = property_get(object, property_name);
  let value = list_get(list, index);
  return value;
}
