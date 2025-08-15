import { list_is } from "./list_is.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_squash(list) {
  function lambda2(la) {
    list_process(list);
    function list_process(list) {
      function lambda(item) {
        let l = list_is(item);
        let fn = null;
        if (l) {
          fn = list_process;
        } else {
          fn = la;
        }
        fn(item);
      }
      each(list, lambda);
    }
  }
  let squashed = list_adder(lambda2);
  return squashed;
}
