import { list_insert_at_multiple } from "./list_insert_at_multiple.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function list_replace_multiple(list, item, list_replacements) {
  let index = list_index_of(list, item);
  list_remove(list, item);
  list_insert_at_multiple(list, index, list_replacements);
}
