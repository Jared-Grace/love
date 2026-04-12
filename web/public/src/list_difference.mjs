import { identity } from "../../../love/public/src/identity.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_difference(list, other) {
  let mapper = identity;
  function lambda2(la) {
    function lambda(l) {
      let list2 = mapper(other);
      let a = list_includes(list2, l);
      if (not(a)) {
        la(l);
      }
    }
    each(list, lambda);
  }
  let difference = list_adder(lambda2);
  return difference;
}
