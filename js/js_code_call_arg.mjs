import { js_code_call_args } from "./js_code_call_args.mjs";
export function js_code_call_arg(f_name, v) {
  let code = js_code_call_args(f_name, [v]);
  return code;
}
