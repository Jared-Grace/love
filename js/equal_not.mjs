import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export function equal_not(left, right) {
  let a = equal(left, right);
  let ne = not(a);
  return ne;
}
