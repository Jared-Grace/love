import { not } from "../../../love/public/src/not.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_difference(list, other) {
  function lambda2(la) {
    function lambda(l) {
      let a = list_includes(other, l);
      if (not(a)) {
        la(l);
      }
    }
    each(list, lambda);
  }
  let difference = list_adder(lambda2);
  return difference;
}
