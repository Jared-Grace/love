import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
export function property_list_includes(object, property_name, value) {
  arguments_assert(arguments, 3);
  ("Whether the list held under this name has this thing in it.");
  ("The mirror of the neighbour that asks whether a held value is in a list");
  ("handed over. Here the list is the held thing: the names a file already knows,");
  ("the statements a block is made of. The list is reached for only to be asked");
  ("this one question, so it is never wanted standing on its own in between.");
  let list = property_get(object, property_name);
  let inside = list_includes(list, value);
  return inside;
}
