import { not } from "./not.mjs";
import { negative_is } from "./negative_is.mjs";
export function negative_not_is(i) {
  let p = negative_is(i);
  let nn = not(p);
  return nn;
}
