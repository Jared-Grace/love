import { list_get } from "./list_get.mjs";
import { list_index_of_previous } from "./list_index_of_previous.mjs";
export function list_previous(list, item) {
  let index_previous = list_index_of_previous(list, item);
  let previous = list_get(list, index_previous);
  return previous;
}
