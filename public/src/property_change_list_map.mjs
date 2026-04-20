import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { list_map_curried_right } from "../../../love/public/src/list_map_curried_right.mjs";
export function property_change_list_map(object, property_name, lambda$item) {
  let c = list_map_curried_right(lambda$item);
  let value_changed = property_transform(object, property_name, c);
  return value_changed;
}
