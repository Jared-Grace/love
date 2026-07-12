import { list_adder } from "./list_adder.mjs";
import { each_index } from "./each_index.mjs";
export function list_find_indices(list, predicate) {
  function lambda(la) {
    function lambda2(item, index) {
      let sw = predicate(item);
      if (sw) {
        la(index);
      }
    }
    each_index(list, lambda2);
  }
  let indices = list_adder(lambda);
  return indices;
}
