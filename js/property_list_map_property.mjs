import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
export function property_list_map_property(
  object,
  property_name,
  item_property_name,
) {
  arguments_assert(arguments, 3);
  ("One part of every thing in the list held under this name.");
  ("Reaching in for a list and then taking the same part out of each of its things is");
  ("how a set of numbers, keys or codes is gathered everywhere here, and the list in");
  ("between is given a name that nothing else ever reads.");
  let list = property_get(object, property_name);
  let mapped = list_map_property(list, item_property_name);
  return mapped;
}
