import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_clear } from "./list_clear.mjs";
export function list_replace_all(list, list_new) {
  list_clear(list);
  list_add_multiple(list, list_new);
}
