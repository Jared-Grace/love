import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function list_find_property_get(
  list,
  property_find,
  value,
  property_get_value,
) {
  let item = list_find_property(list, property_find, value);
  let g = object_property_get(item, property_get_value);
  return g;
}
