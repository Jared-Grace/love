import { each } from "./each.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_includes } from "./list_includes.mjs";
export function list_intersect(list, other) {
  function lambda2(la) {
    function lambda(l) {
      if (list_includes(other, l)) {
        la(l);
      }
    }
    each(list, lambda);
  }
  let list2 = list_adder(lambda2);
  return list2;
}
