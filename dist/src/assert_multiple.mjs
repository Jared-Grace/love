import { each } from "../../../love/public/src/each.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export function assert_multiple(fn, list) {
  function lambda(l) {
    let ii = fn(l);
    assert(ii);
  }
  each(list, lambda);
}
