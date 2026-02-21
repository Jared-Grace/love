import { promise_resolved } from "../../../love/public/src/promise_resolved.mjs";
export function promise_later(lambda4) {
  promise_resolved().then(lambda4);
}
