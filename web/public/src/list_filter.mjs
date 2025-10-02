import { list_is } from "../../../love/public/src/list_is.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export function list_filter(list, lambda$item) {
  let l = list_is(list);
  assert(l);
  function lambda(item) {
    let v = lambda$item(item);
    return v;
  }
  let filtered = list.filter(lambda);
  return filtered;
}
