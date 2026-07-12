import { list_adder } from "./list_adder.mjs";
import { each_range } from "./each_range.mjs";
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
