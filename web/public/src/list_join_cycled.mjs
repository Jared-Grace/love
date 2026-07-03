import { list_index_last_is } from "../../../love/public/src/list_index_last_is.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { list_get_wrap } from "../../../love/public/src/list_get_wrap.mjs";
import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_join_cycled(list, list_separators) {
  function lambda(la) {
    let item = list_get_wrap(cycles, index);
    function lambda2(item2, index2) {
      let li = list_index_last_is(list4, index3);
    }
    each_index(list3, lambda2);
  }
  let list2 = list_adder(lambda);
  let joined = list_join_empty(list2);
  return joined;
}
