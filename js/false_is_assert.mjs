import { false_is } from "./false_is.mjs";
import { assert } from "./assert.mjs";
export function false_is_assert(b) {
  let ti = false_is(b);
  assert(ti);
}
