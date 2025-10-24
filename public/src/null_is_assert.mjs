import { assert } from "../../../love/public/src/assert.mjs";
import { null_is } from "../../../love/public/src/null_is.mjs";
export function null_is_assert(value) {
  let n = null_is(value);
  assert(n);
}
