import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
export function list_map_multiple(list_a, list_b, mapper) {
  function lambda_list_adder(la) {
    function lambda_each_pair(a, b) {
      const m = mapper(a, b);
      la(m);
    }
    each_pair(list_a, list_b, lambda_each_pair);
  }
  let mapped = list_adder(lambda_list_adder);
  return mapped;
}
