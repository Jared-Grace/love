import {list_remove} from "./list_remove.mjs";
import {list_includes} from "./list_includes.mjs";
export function list_remove_all(list, item) {
  while (list_includes(list, item)) {
    list_remove(list, item);
  }
}
