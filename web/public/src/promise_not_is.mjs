import { not } from "../../../love/public/src/not.mjs";
import { promise_is } from "../../../love/public/src/promise_is.mjs";
export function promise_not_is(object) {
  let a = promise_is(object);
  let n = not(a);
  return n;
}
