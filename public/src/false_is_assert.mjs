import { false_is } from "../../../love/public/src/false_is.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
export function false_is_assert(b) {
  marker("1");
  let ti2 = false_is(b);
  assert(ti2);
}
