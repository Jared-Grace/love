import { invoke_multiple } from "./invoke_multiple.mjs";
export function invoke_multiple_fn(fn) {
  let fns = fn();
  let invalid = invoke_multiple(fns);
  return invalid;
}
