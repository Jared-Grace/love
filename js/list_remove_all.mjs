import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_remove_all(list, item) {
  while (list_includes(list, item)) {
    list_remove(list, item);
  }
}
