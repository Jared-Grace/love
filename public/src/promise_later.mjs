import { promise_resolved } from "../../../love/public/src/promise_resolved.mjs";
export function promise_later(lambda) {
  promise_resolved().then(lambda);
}
