import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
export function list_find_indices(split, predicate) {
  function lambda(la) {
    function lambda2(item, index) {
      let sw = predicate(item);
      if (sw) {
        la(index);
      }
    }
    each_index(split, lambda2);
  }
  let list = list_adder(lambda);
  return list;
}
