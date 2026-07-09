import { list_adder_each_index } from "../../../love/public/src/list_adder_each_index.mjs";
import { integer_odd_is } from "../../../love/public/src/integer_odd_is.mjs";
export function list_filter_indices_odd(parts) {
  function lambda(la, item, index) {
    let eq = integer_odd_is(index);
    if (eq) {
      la(item);
    }
  }
  let r4 = list_adder_each_index(parts, lambda);
  return r4;
}
