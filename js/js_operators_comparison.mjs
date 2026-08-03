import { invoke_multiple_fn } from "./invoke_multiple_fn.mjs";
import { js_operators_comparison_fns } from "./js_operators_comparison_fns.mjs";
export function js_operators_comparison() {
  "the six comparison operators themselves, each with its symbol and the function that works it out - the sibling of js_operators_arithmetic";
  let os = invoke_multiple_fn(js_operators_comparison_fns);
  return os;
}
