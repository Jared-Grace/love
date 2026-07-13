import { assert } from "./assert.mjs";
import { null_is } from "./null_is.mjs";
export function null_is_assert(value) {
  let n = null_is(value);
  assert(n);
}
