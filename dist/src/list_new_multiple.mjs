import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
export function list_new_multiple(count) {
  function lambda(la) {
    function lambda2(i) {
      la([]);
    }
    each_range(count, lambda2);
  }
  let list = list_adder(lambda);
  return list;
}
