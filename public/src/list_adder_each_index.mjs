import { list_adder } from "../../../love/public/src/list_adder.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
export function list_adder_each_index(list, lambda$la$item$index) {
  function lambda(la) {
    function lambda2(item, index) {
      lambda$la$item(la, item, index);
    }
    each_index(list, lambda2);
  }
  let r = list_adder(lambda);
  return r;
}
