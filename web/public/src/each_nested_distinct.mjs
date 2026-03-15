import { each } from "../../../love/public/src/each.mjs";
export function each_nested_distinct(lambda3, r, rules) {
  function lambda(rule) {
    function lambda2(index) {
      lambda3(rule, index);
    }
    each(r, lambda2);
  }
  each(rules, lambda);
}
