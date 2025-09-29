import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
export function list_index_of_delta_outside(list, item, delta) {
  let index = list_index_of(list, item);
  let index_next = index + delta;
  return index_next;
}
