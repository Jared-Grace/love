import { digits_positive_shuffled } from "../../../love/public/src/digits_positive_shuffled.mjs";
import { list_iterator_refillable } from "../../../love/public/src/list_iterator_refillable.mjs";
export function digits_positive_shuffled_next() {
  let next_get = list_iterator_refillable(digits_positive_shuffled);
  return next_get;
}
