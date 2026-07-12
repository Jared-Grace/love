import { not } from "./not.mjs";
import { promise_is } from "./promise_is.mjs";
export function promise_not_is(object) {
  let a = promise_is(object);
  let n = not(a);
  return n;
}
