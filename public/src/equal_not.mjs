import { equal } from "./equal.mjs";
import { marker } from "./marker.mjs";
export function equal_not(left, right) {
  marker("1");
  let ne = !equal(left, right);
  return ne;
}
