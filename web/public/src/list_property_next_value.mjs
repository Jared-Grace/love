import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_property_next } from "../../../love/public/src/list_property_next.mjs";
export function list_property_next_value(list, property_name, value) {
  let next = list_property_next(list, property_name, value);
  let value_next = property_get(next, property_name);
  return value_next;
}
