import { each } from "../../../love/public/src/each.mjs";
export function invoke_multiple_args_async(list_fns, args) {
  function lambda_each(fn) {
    fn(...args);
  }
  each(list_fns, lambda_each);
}
