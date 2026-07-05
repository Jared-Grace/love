import { each } from "../../../love/public/src/each.mjs";
export function each_nested_args_both(list_a, list_b, lambda$a$b) {
  'not sure if this function is doing the "distinct" part - maybe this is coded wrong?';
  "or distinct could refer to a and b both being passed into the lambda?";
  function lambda_a(a) {
    function lambda_b(b) {
      lambda$a$b(a, b);
    }
    each(list_b, lambda_b);
  }
  each(list_a, lambda_a);
}
