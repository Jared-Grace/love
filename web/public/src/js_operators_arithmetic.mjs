import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { js_operators_arithmetic_fns } from "../../../love/public/src/js_operators_arithmetic_fns.mjs";
export function js_operators_arithmetic() {
  let fns = js_operators_arithmetic_fns();
  let os = invoke_multiple(fns);
  return os;
}
