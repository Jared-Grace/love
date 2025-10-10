import { not } from "../../../love/public/src/not.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function equal_not(left, right) {
  marker("1");
  let a = equal(left, right);
  let ne = not(a);
  return ne;
}
