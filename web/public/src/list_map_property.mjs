import { property_get_curried_right } from "../../../love/public/src/property_get_curried_right.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_property(list, property_name) {
  let r = property_get_curried_right(property_name);
  let mapped = list_map(list, r);
  return mapped;
}
