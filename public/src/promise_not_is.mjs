import { not } from "./not.mjs";
import { promise_is } from "./promise_is.mjs";
export function promise_not_is(ast) {
  let a = promise_is(ast);
  let n = not(a);
  return n;
}
