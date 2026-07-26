import { js_code_call_args } from "./js_code_call_args.mjs";
export function js_code_call(fn_name) {
  let args = [];
  let result = js_code_call_args(fn_name, args);
  return result;
}
