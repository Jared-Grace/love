import { list_adder_each } from "../../../love/public/src/list_adder_each.mjs";
import { each_range } from "../../../love/public/src/each_range.mjs";
export function list_items_multiply(list, count) {
  function lambda(la, item) {
    function lambda3(i) {
      la(item);
    }
    each_range(count, lambda3);
  }
  let doubled = list_adder_each(list, lambda);
  return doubled;
}
