import { js_code_call_args } from "./js_code_call_args.mjs";
import { fn_name } from "./fn_name.mjs";
export function js_code_call_arg(fn_name, v) {
  let code3 = js_code_call_args(fn_name, [v]);
  return code3;
}
