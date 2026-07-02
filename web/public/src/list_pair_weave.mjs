import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_pair } from "../../../love/public/src/each_pair.mjs";
import { each } from "../../../love/public/src/each.mjs";
export function list_pair_weave(list_a, list_b) {
  function lambda2(la) {
    function lambda(a, b) {
      each([a, b], la);
    }
    each_pair(list_a, list_b, lambda);
  }
  let list = list_adder(lambda2);
  return list;
}
