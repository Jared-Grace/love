import { list_index_of_delta } from "./list_index_of_delta.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function list_index_of_previous(list, item) {
  const delta = -1;
  const newLocal = list_index_of_delta(list, item, delta);
  return newLocal;
}
