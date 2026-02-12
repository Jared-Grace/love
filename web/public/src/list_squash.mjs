import { ternary } from "../../../love/public/src/ternary.mjs";
import { list_is } from "../../../love/public/src/list_is.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_squash(lists) {
  function lambda2(la) {
    list_process(lists);
    function list_process(list) {
      function lambda(item) {
        let l = list_is(item);
        let fn = null;
        fn = ternary(l, la, list_process);
        fn(item);
      }
      each(list, lambda);
    }
  }
  let squashed = list_adder(lambda2);
  return squashed;
}
