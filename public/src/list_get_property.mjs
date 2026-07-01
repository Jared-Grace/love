import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_get } from "../../../love/public/src/list_get.mjs";
export function list_get_property(list, index_previous, property) {
  let previous = list_get(list, index_previous);
  let value_new = property_get(previous, property);
  return value_new;
}
