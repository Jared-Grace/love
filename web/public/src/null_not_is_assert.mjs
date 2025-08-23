import {assert} from "./assert.mjs";
import {null_not_is} from "./null_not_is.mjs";
export function null_not_is_assert(a) {
  let nn = null_not_is(a);
  assert(nn);
}
