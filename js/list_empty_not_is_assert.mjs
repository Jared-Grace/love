import { assert } from "./assert.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function list_empty_not_is_assert(list) {
  let ne = list_empty_not_is(list);
  assert(ne);
}
