import { not } from "../../../love/public/src/not.mjs";
import { list_index_last_is } from "../../../love/public/src/list_index_last_is.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { list_get_wrap } from "../../../love/public/src/list_get_wrap.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
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
