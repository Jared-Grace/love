import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_remove_all } from "../../../love/public/src/list_remove_all.mjs";
export function list_add_unique(list, item) {
  list_remove_all(list, item);
  list_add(list, item);
}
