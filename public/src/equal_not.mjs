import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { marker } from "./marker.mjs";
export function equal_not(left, right) {
  marker("1");
  let a = equal(left, right);
  let ne = not(a);
  return ne;
}
