import { marker } from "./marker.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
export function equal_assert(left, right) {
  marker("1");
  let eq = equal(left, right);
  assert(eq);
}
