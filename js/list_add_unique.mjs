import { list_add } from "./list_add.mjs";
import { list_remove_every } from "./list_remove_every.mjs";
export function list_add_unique(list, item) {
  list_remove_every(list, item);
  list_add(list, item);
}
