import { equal } from "./equal.mjs";
export function equal_by(a, b, lambda$item) {
  const left = lambda$item(a);
  const right = lambda$item(b);
  let v = equal(left, right);
  return v;
}
