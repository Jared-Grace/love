import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_clear } from "./list_clear.mjs";
export function list_replace_all(list, items) {
  list_clear(list);
  list_add_multiple(list, items);
}
