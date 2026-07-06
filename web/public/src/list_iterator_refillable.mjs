import { noop } from "../../../love/public/src/noop.mjs";
import { list_iterator_refillable_on } from "../../../love/public/src/list_iterator_refillable_on.mjs";
export function list_iterator_refillable(refill_get) {
  let next_get2 = list_iterator_refillable_on(refill_get, noop);
  return next_get2;
}
