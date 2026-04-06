import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
export function list_remove_add(list_to_remove, list_to_add, item) {
  list_remove(list_to_remove, item);
  list_add(list_to_add, item);
}
