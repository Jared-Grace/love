import { equal } from "./equal.mjs";
import { list_index_last } from "./list_index_last.mjs";
export function list_index_last_is(list, index) {
  let index_last = list_index_last(list);
  let li = equal(index, index_last);
  return li;
}
