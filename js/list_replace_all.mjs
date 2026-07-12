import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty } from "./list_empty.mjs";
export function list_replace_all(list, list_new) {
  list_empty(list);
  list_add_multiple(list, list_new);
}
