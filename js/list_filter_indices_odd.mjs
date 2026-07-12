import { list_adder_each_index } from "./list_adder_each_index.mjs";
import { integer_odd_is } from "./integer_odd_is.mjs";
export function list_filter_indices_odd(list) {
  function lambda(la, item, index) {
    let eq = integer_odd_is(index);
    if (eq) {
      la(item);
    }
  }
  let filtered = list_adder_each_index(list, lambda);
  return filtered;
}
