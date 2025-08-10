import { error } from "./error.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function list_remove(list, item) {
  const index = list_index_of(list, item);

  list.splice(index, 1);
}
