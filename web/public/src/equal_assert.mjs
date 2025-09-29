import { marker } from "../../../love/public/src/marker.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function equal_assert(left, right) {
  marker("1");
  let eq = equal(left, right);
  assert(eq);
}
