import { not } from "../../../love/public/src/not.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function equal_not(left, right) {
  let a = equal(left, right);
  let ne = not(a);
  return ne;
}
