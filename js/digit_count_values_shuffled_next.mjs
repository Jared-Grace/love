import { list_iterator_refillable } from "./list_iterator_refillable.mjs";
import { digit_count_values_shuffled } from "./digit_count_values_shuffled.mjs";
export function digit_count_values_shuffled_next(digit_count) {
  function lambda4() {
    let r = digit_count_values_shuffled(digit_count);
    return r;
  }
  let next = list_iterator_refillable(lambda4);
  return next;
}
