import { list_map } from "./list_map.mjs";
import { list_find_property } from "./list_find_property.mjs";
export function list_map_find_property(list, list_other, property) {
  function lambda(item) {
    let r = list_find_property(list_other, property, item);
    return r;
  }
  let founds = list_map(list, lambda);
  return founds;
}
