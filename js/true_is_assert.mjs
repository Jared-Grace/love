import { assert } from "./assert.mjs";
import { true_is } from "./true_is.mjs";
export function true_is_assert(enabled) {
  let ti = true_is(enabled);
  assert(ti);
}
