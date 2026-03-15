import { each } from "../../../love/public/src/each.mjs";
export function each_nested_distinct(lambda$a$b, list_b, list_a) {
  function lambda_a(a) {
    function lambda_b(b) {
      lambda$a$b(a, b);
    }
    each(list_b, lambda_b);
  }
  each(list_a, lambda_a);
}
