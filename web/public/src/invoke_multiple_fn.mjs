import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
export function invoke_multiple_fn(fn) {
  let fns = fn();
  let invalid = invoke_multiple(fns);
  return invalid;
}
