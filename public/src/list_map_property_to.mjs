import { property_set } from "../../../love/public/src/property_set.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function list_map_property_to(list, name) {
  function lambda(item) {
    let o = {};
    property_set(o, name, item);
    return o;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
