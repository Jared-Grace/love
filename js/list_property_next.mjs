import { list_get } from "./list_get.mjs";
import { list_index_of_next_property } from "./list_index_of_next_property.mjs";
export function list_property_next(list, property_name, value) {
  let index_next = list_index_of_next_property(list, property_name, value);
  let next = list_get(list, index_next);
  return next;
}
