import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
export function list_index_of_property(list, property, value) {
  let item = list_find_property(list, property, value);
  let index_next = list_index_of(list, item);
  return index_next;
}
