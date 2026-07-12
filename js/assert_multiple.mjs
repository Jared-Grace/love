import { each } from "./each.mjs";
import { assert } from "./assert.mjs";
export function assert_multiple(fn, list) {
  function lambda(l) {
    let ii = fn(l);
    assert(ii);
  }
  each(list, lambda);
}
