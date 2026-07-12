import { not } from "./not.mjs";
import { list_index_last_is } from "./list_index_last_is.mjs";
import { each_index } from "./each_index.mjs";
import { list_get_wrap } from "./list_get_wrap.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_join_cycled(list, list_separators) {
  function lambda(la) {
    function lambda2(item, index) {
      la(item);
      let li = list_index_last_is(list, index);
      if (not(li)) {
        let separator = list_get_wrap(list_separators, index);
        la(separator);
      }
    }
    each_index(list, lambda2);
  }
  let list2 = list_adder(lambda);
  let joined = list_join_empty(list2);
  return joined;
}
