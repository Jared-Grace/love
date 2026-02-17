import { assert } from "../../../love/public/src/assert.mjs";
import { negative_not_is } from "../../../love/public/src/negative_not_is.mjs";
export function negative_not_is_assert(start) {
  let nn = negative_not_is(start);
  assert(nn);
}
