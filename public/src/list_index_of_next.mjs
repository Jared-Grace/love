import { list_index_of_delta } from "./list_index_of_delta.mjs";
export function list_index_of_next(list, item) {
  const delta = 1;
  let index_next = list_index_of_delta(list, item, delta);
  return index_next;
}
