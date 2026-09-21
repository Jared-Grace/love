import { assert } from "./assert.mjs";
import { negative_not_is } from "./negative_not_is.mjs";
export function negative_not_is_assert(n) {
  let nn = negative_not_is(n);
  assert(nn);
}
