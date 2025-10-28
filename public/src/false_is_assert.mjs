import { marker } from "../../../love/public/src/marker.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { true_is } from "../../../love/public/src/true_is.mjs";
export function false_is_assert(enabled) {
  marker("1");
  let ti2 = true_is(enabled);
  assert(ti2);
}
