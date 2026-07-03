import { list_join_empty } from "../../../love/public/src/list_join_empty.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
export function text_multiply(value, times) {
  function lambda(la) {
    function lambda4(i) {
      la(value);
    }
    each_range(times, lambda4);
  }
  let list = list_adder(lambda);
  let joined = list_join_empty(list);
  return joined;
}
