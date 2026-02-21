import { assert } from "../../../love/public/src/assert.mjs";
import { list_multiple_is } from "../../../love/public/src/list_multiple_is.mjs";
export function list_multiple_is_assert(list) {
  let m = list_multiple_is(list);
  assert(m);
}
