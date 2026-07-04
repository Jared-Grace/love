import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_adder_each(lambda$la$e) {
  function lambda(la) {
    function lambda2(item) {}
    each(list2, lambda2);
  }
  let list = list_adder(lambda);
  return list;
}
