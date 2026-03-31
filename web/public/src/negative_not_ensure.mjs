import { negative } from "../../../love/public/src/negative.mjs";
import { negative_is } from "../../../love/public/src/negative_is.mjs";
export function negative_not_ensure(i) {
  let n = negative_is(i);
  if (n) {
    i = negative(i);
  }
  return i;
}
