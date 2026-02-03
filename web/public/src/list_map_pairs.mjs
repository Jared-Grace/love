import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
export function list_map_pairs(list_a, list_b, mapper) {
  function lambda2(la) {
    function lambda(a, b) {
      const m = mapper(a, b);
      la(m);
    }
    each_pair(list_a, list_b, lambda);
  }
  let mapped = list_adder(lambda2);
  return mapped;
}
