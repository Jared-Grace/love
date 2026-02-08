import { assert } from "../../../love/public/src/assert.mjs";
import { positive_is } from "../../../love/public/src/positive_is.mjs";
export function positive_is_assert(n) {
  let p = positive_is(n);
  assert(p);
}
