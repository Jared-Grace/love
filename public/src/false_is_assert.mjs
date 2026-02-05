import { false_is } from "../../../love/public/src/false_is.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export function false_is_assert(b) {
  let ti2 = false_is(b);
  assert(ti2);
}
