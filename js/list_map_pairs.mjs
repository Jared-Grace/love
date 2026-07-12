import { list_adder } from "./list_adder.mjs";
import { each_pair } from "./each_pair.mjs";
export function list_map_pairs(list_a, list_b, mapper) {
  function lambda_list_adder(la) {
    function lambda_each_pair(a, b) {
      let m = mapper(a, b);
      la(m);
    }
    each_pair(list_a, list_b, lambda_each_pair);
  }
  let mapped = list_adder(lambda_list_adder);
  return mapped;
}
