import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
export function range_1_next(m) {
  function lambda2() {
    let r = range_1(m);
    return r;
  }
  let next = list_iterator_refillable(lambda2);
  return next;
}
