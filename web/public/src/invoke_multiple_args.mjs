import { each } from "../../../love/public/src/each.mjs";
export function invoke_multiple_args(list_fns, args) {
  function lambda2(fn) {
    fn(...args);
  }
  each(list_fns, lambda2);
}
