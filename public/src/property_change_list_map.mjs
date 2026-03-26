import { property_change } from "../../../love/public/src/property_change.mjs";
import { list_map_curried_right } from "../../../love/public/src/list_map_curried_right.mjs";
export function property_change_list_map(object, property_name, lambda$item) {
  let c = list_map_curried_right(lambda$item);
  let value_changed = property_change(object, property_name, c);
  return value_changed;
}
