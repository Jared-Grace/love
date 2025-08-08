import { error } from "./error.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function list_remove(arr, item) {
  const index = list_index_of(arr, item);

  arr.splice(index, 1);
}
