import { assert } from "../../../love/public/src/assert.mjs";
import { text_is } from "../../../love/public/src/text_is.mjs";
export function text_is_assert(value) {
  let b = text_is(value);
  assert(b);
}
