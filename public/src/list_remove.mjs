import { list_remove_at } from "./list_remove_at.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function list_remove(list, item) {
  const index = list_index_of(list, item);
  list_remove_at(list, index);
}
