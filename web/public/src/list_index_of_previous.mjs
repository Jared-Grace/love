import { list_index_of_delta } from "./list_index_of_delta.mjs";
export function list_index_of_previous(list, item) {
  const delta = -1;
  const index_previous = list_index_of_delta(list, item, delta);
  return index_previous;
}
