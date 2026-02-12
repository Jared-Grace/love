import { property_get_curried_right } from "../../../love/public/src/property_get_curried_right.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_property(list, property_name) {
  function list_map_property_lambda(item) {
    let value = property_get(item, property_name);
    return value;
  }
  let mapped = list_map(list, list_map_property_lambda);
  return mapped;
  let r = property_get_curried_right(property_name);
}
