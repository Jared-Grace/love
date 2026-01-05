import { assert } from "../../../love/public/src/assert.mjs";
import { positive_is } from "../../../love/public/src/positive_is.mjs";
export function positive_is_assert(chunk_size) {
  let p = positive_is(chunk_size);
  assert(p);
}
