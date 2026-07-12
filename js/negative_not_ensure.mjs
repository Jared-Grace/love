import { negative } from "./negative.mjs";
import { negative_is } from "./negative_is.mjs";
export function negative_not_ensure(i) {
  let n = negative_is(i);
  if (n) {
    i = negative(i);
  }
  return i;
}
