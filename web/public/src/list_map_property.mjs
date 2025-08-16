import { object_property_get } from "./object_property_get.mjs";
import { list_map } from "./list_map.mjs";
export function list_map_property(list, property_name) {
  function lambda(item) {
    let value = object_property_get(item, property_name);
    return value;
  }
  let result = list_map(list, lambda);
  return result;
}
