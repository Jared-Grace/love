import { assert } from "../../../love/public/src/assert.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
export function list_empty_not_is_assert(list) {
  let ne = list_empty_not_is(list);
  assert(ne);
}
