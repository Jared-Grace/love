import { equal } from "./equal.mjs";
export function equal_by(a, b, lambda$item) {
  let left = lambda$item(a);
  let right = lambda$item(b);
  let eq = equal(left, right);
  return eq;
}
