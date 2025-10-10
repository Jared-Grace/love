import { assert } from "../../../love/public/src/assert.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
export function null_not_is_assert(a) {
  let nn = null_not_is(a);
  assert(nn);
}
