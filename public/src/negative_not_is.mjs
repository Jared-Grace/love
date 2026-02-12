import { not } from "../../../love/public/src/not.mjs";
import { negative_is } from "../../../love/public/src/negative_is.mjs";
export function negative_not_is(i) {
  let p = negative_is(i);
  let nn = not(p);
  return nn;
}
