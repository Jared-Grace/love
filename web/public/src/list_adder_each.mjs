import { each } from "../../../love/public/src/each.mjs";
import { list_adder } from "../../../love/public/src/list_adder.mjs";
export function list_adder_each(list, lambda$la$item) {
  function lambda(la) {
    function lambda2(item) {
      lambda$la$item(la, item);
    }
    each(list, lambda2);
  }
  let r = list_adder(lambda);
  return r;
}
