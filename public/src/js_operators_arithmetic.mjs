import { invoke_multiple_fn } from "../../../love/public/src/invoke_multiple_fn.mjs";
import { js_operators_arithmetic_fns } from "../../../love/public/src/js_operators_arithmetic_fns.mjs";
export function js_operators_arithmetic() {
  let os = invoke_multiple_fn(js_operators_arithmetic_fns);
  return os;
}
