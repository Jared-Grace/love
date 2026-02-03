import { list_index_of_next } from "../../../love/public/src/list_index_of_next.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function list_index_of_next_property(languages, property, value) {
  let item = list_find_property(languages, property, value);
  let index_next = list_index_of_next(languages, item);
  return index_next;
}
