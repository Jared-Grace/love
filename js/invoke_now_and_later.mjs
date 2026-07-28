import { promise_later } from "./promise_later.mjs";
export function invoke_now_and_later(fn) {
  "invoke fn immediately AND again on the next microtask — the settling pattern for anything measured from live layout: the now-call handles the common case (reading layout forces a reflow, so it is already correct), and the deferred call catches the case where a size or style is not final until the current synchronous work finishes";
  fn();
  promise_later(fn);
}
