import { list_map_all_equal } from "../../../love/public/src/list_map_all_equal.mjs";
import { property_get_curried } from "../../../love/public/src/property_get_curried.mjs";
export function object_properties_equal(e, properties) {
  let r = property_get_curried(e);
  let eq = list_map_all_equal(properties, r);
  return eq;
}
