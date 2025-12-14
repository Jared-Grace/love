import { each } from "../../../love/public/src/each.mjs";
export function invoke_multiple_args(list_fns, args) {
  function lambda2(lambda) {
    lambda(...args);
  }
  each(lambdas, lambda2);
}
