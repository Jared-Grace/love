import { js_code_call_args } from "./js_code_call_args.mjs";
export function js_code_call_arg(fn_name, v) {
  let code = js_code_call_args(fn_name, [v]);
  return code;
}
