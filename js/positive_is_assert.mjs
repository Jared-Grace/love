import { assert } from "./assert.mjs";
import { positive_is } from "./positive_is.mjs";
export function positive_is_assert(n) {
  let p = positive_is(n);
  assert(p);
}
