import { not } from "./not.mjs";
import { or } from "./or.mjs";
export function implies(a, b) {
  let na = not(a);
  let result = or(na, b);
  return result;
}
