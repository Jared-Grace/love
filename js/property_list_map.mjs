import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
export function property_list_map(object, property_name, lambda) {
  arguments_assert(arguments, 3);
  ("Every thing in the list held under this name, put through the same lambda.");
  ("The sibling of ",
    fn_name("property_list_map_property"),
    ", for when what is wanted out of each");
  ("thing is worked out rather than looked up. The list in between is given a name");
  ("that nothing else ever reads.");
  let list = property_get(object, property_name);
  let mapped = list_map(list, lambda);
  return mapped;
}
