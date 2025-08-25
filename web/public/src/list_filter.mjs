import { list_is } from "./list_is.mjs";
import { assert } from "./assert.mjs";
export function list_filter(list, lambda$item) {
  let l = list_is(list);
  assert(l);
  let filtered = list.filter(lambda$item);
  return filtered;
}
