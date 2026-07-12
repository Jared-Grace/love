import { list_insert } from "./list_insert.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function list_index_of_insert(list, item_index, item_insert) {
  let index = list_index_of(list, item_index);
  list_insert(list, index, item_insert);
}
