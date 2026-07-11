import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
import { range_ } from "../../../love/public/src/range_1.mjs";
export function range_1_next(m) {
  function lambda() {
    let r = range_(m);
    return r;
  }
  let next = list_iterator_refillable(lambda);
  return next;
}
