import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
export function list_get_property(list, index_previous, property) {
  let previous = list_get(list, index_previous);
  let value_new = property_get(previous, property);
  return value_new;
}
