import { property_transform } from "./property_transform.mjs";
import { list_map_curried_right } from "./list_map_curried_right.mjs";
export function property_transform_list_map(
  object,
  property_name,
  lambda$item,
) {
  let c = list_map_curried_right(lambda$item);
  let value_changed = property_transform(object, property_name, c);
  return value_changed;
}
