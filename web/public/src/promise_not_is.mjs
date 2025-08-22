import { promise_is } from "./promise_is.mjs";
export function promise_not_is(ast) {
  return !promise_is(ast);
}
