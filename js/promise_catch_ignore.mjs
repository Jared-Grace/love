import { noop } from "./noop.mjs";
export function promise_catch_ignore(promise) {
  let r = promise.catch(noop);
  return r;
}
