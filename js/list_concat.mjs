import { list_is } from "../../../love/public/src/list_is.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export function list_concat(a, b) {
  let l = list_is(a);
  assert(l);
  let concated = a.concat(b);
  return concated;
}
