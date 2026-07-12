import { assert } from "./assert.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function text_empty_not_is_assert(s) {
  let ne = text_empty_not_is(s);
  assert(ne);
}
