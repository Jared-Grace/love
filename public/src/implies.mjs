import { not } from "../../../love/public/src/not.mjs";
import { or } from "../../../love/public/src/or.mjs";
export function implies(a, b) {
  let na = not(a);
  let result = or(na, b);
  return result;
}
