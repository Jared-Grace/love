import { list_index_of } from "./list_index_of.mjs";
import { list_find_property } from "./list_find_property.mjs";
export function list_index_of_property(list, property, value) {
  let item = list_find_property(list, property, value);
  let index_next = list_index_of(list, item);
  return index_next;
}
