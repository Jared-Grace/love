import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
export function list_new_multiple(a12) {
  function lambda(la2) {
    function lambda2(i) {
      la2([]);
    }
    each_range(a12, lambda2);
  }
  let list = list_adder(lambda);
  return list;
}
