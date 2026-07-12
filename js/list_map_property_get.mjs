import { list_map } from "./list_map.mjs";
import { property_get_curried } from "./property_get_curried.mjs";
export function list_map_property_get(list, object) {
  let c = property_get_curried(object);
  let mapped = list_map(list, c);
  return mapped;
}
