import { list_map } from "../../../love/public/src/list_map.mjs";
import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
export function list_map_property_get(list, object) {
  let c = property_get_curried(object);
  let list = list_map(list, c);
  return list;
}
