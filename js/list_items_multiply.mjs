import { list_adder_each } from "./list_adder_each.mjs";
import { each_range } from "./each_range.mjs";
export function list_items_multiply(list, count) {
  function lambda(la, item) {
    function lambda2(i) {
      la(item);
    }
    each_range(count, lambda2);
  }
  let doubled = list_adder_each(list, lambda);
  return doubled;
}
