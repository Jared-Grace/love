import { not } from "./not.mjs";
import { list_index_is } from "./list_index_is.mjs";
import { list_index_of } from "./list_index_of.mjs";
export function list_index_of_delta(list, item, delta) {
  let index = list_index_of(list, item);
  let index_next = index + delta;
  let ii = list_index_is(list, index_next);
  if (not(ii)) {
    let v = null;
    return v;
  }
  return index_next;
}
