import { list_is } from "./list_is.mjs";
import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
export function list_squash(list) {
  function lambda2(la) {
    function lambda(item) {
      let l = list_is(item);
      if (l) {
      }
    }
    each(list, lambda);
  }
  let squashed = list_adder(lambda2);
}
