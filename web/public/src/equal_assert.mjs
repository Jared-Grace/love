import { marker } from "./marker.mjs";
import { assert } from "./assert.mjs";
import { equal } from "./equal.mjs";
export function equal_assert(length, count) {
  marker("1");
  let eq = equal(length, count);
  assert(eq);
}
