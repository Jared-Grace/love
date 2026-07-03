import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
export function object_multiply(value, times) {
  function lambda(la) {
    function lambda4(i) {
      la(value);
    }
    each_range(times, lambda4);
  }
  let multiplied = list_adder(lambda);
  return multiplied;
}
