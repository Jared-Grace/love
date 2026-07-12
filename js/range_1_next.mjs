import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { range_1 } from "./range_1.mjs";
export function range_1_next(m) {
  function lambda() {
    let r = range_1(m);
    return r;
  }
  let next = list_iterator_refillable(lambda);
  return next;
}
