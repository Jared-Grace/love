import { assert } from "./assert.mjs";
import { text_is } from "./text_is.mjs";
export function text_is_assert(value) {
  let b = text_is(value);
  assert(b);
}
