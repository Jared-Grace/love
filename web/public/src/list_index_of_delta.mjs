import { list_index_of_delta_outside } from "./list_index_of_delta_outside.mjs";
import { not } from "./not.mjs";
import { list_index_is } from "./list_index_is.mjs";
export function list_index_of_delta(list, item, delta) {
  let index_next = list_index_of_delta_outside(list, item, delta);
  let ii = list_index_is(list, index_next);
  if (not(ii)) {
    let v = null;
    return v;
  }
  return index_next;
}
