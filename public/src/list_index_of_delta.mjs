import { list_index_of } from "./list_index_of.mjs";
export function list_index_of_delta(list, item, delta) {
  let index = list_index_of(list, item);
  let index_next = index + delta;
  return index_next;
}
