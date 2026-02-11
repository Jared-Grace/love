import { list_map } from "../../../love/public/src/list_map.mjs";
import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
export function list_map_property_get(lilst, object) {
  let c = property_get_curried(object);
  let mapped = list_map(lilst, c);
  return mapped;
}
