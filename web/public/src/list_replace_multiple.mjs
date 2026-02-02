import { list_insert_at_multiple } from "../../../love/public/src/list_insert_at_multiple.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
export function list_replace_multiple(list, item, list_replacements) {
  let index = list_index_of(list, item);
  list_remove(list, item);
  list_insert_at_multiple(list_replacements, list, index);
}
