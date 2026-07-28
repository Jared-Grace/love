import { js_code_call_args } from "./js_code_call_args.mjs";
export function js_code_call(f_name) {
  let args = [];
  let result = js_code_call_args(f_name, args);
  return result;
}
