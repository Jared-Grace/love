import { list_remove } from "./list_remove.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_remove_if_exists(list, item) {
  let includes = list_includes(list, item);
  if (includes) {
    list_remove(list, item);
  }
}
