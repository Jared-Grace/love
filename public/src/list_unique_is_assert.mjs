import { assert } from "../../../love/public/src/assert.mjs";
import { list_unique_is } from "../../../love/public/src/list_unique_is.mjs";
export function list_unique_is_assert(mapped) {
  let a = list_unique_is(mapped);
  assert(a);
}
