import { not } from "../../../love/public/src/not.mjs";
import { equal_by } from "../../../love/public/src/equal_by.mjs";
export function equal_by_not(id, argument, fn) {
  let eq = equal_by(id, argument, fn);
  const n = not(eq);
  return n;
}
