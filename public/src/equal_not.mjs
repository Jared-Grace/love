import { equal } from "./equal.mjs";
import { marker } from "./marker.mjs";
export function equal_not(left, right) {
  marker("1");
  return equal(left, right);
}
