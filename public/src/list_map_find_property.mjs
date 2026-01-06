import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function list_map_find_property(list_other, property, sliced) {
  function lambda4(item) {
    let item2 = list_find_property(list_other, property, item);
    return item2;
  }
  let mapped2 = list_map(sliced, lambda4);
  return mapped2;
}
