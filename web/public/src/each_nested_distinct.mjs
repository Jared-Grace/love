import { each } from "../../../love/public/src/each.mjs";
export function each_nested_distinct(lambda3, list_b, list_a) {
  function lambda(rule) {
    function lambda2(index) {
      lambda3(rule, index);
    }
    each(list_b, lambda2);
  }
  each(list_a, lambda);
}
