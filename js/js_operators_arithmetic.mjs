import { invoke_multiple_fn } from "./invoke_multiple_fn.mjs";
import { js_operators_arithmetic_fns } from "./js_operators_arithmetic_fns.mjs";
export function js_operators_arithmetic() {
  let os = invoke_multiple_fn(js_operators_arithmetic_fns);
  return os;
}
