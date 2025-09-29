import { list_is } from "../../../love/public/src/list_is.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export function list_filter(list, lambda$item) {
  let l = list_is(list);
  assert(l);
  let filtered = list.filter(lambda$item);
  return filtered;
}
