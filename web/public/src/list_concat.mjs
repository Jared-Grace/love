import { list_is } from "./list_is.mjs";
import { assert } from "./assert.mjs";
export function list_concat(a, b) {
  let l = list_is(a);
  assert(l);
  let concated = a.concat(b);
  return concated;
}
