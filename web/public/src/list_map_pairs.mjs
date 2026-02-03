import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
export function list_map_pairs(list_a, list_b, mapper) {
  function lambda2(la) {
    function lambda(a, b) {
      const v = mapper(a, b);
      la(v);
    }
    each_pair(list_a, list_b, lambda);
  }
  let list2 = list_adder(lambda2);
  return list2;
}
