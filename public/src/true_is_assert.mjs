import { assert } from "../../../love/public/src/assert.mjs";
import { true_is } from "../../../love/public/src/true_is.mjs";
export function true_is_assert(enabled) {
  let ti = true_is(enabled);
  assert(ti);
}
