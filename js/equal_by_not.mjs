import { not } from "./not.mjs";
import { equal_by } from "./equal_by.mjs";
export function equal_by_not(id, argument, fn) {
  let eq = equal_by(id, argument, fn);
  let n = not(eq);
  return n;
}
