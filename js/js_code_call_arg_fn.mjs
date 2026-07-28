import { js_code_call_arg } from "./js_code_call_arg.mjs";
export function js_code_call_arg_fn(f_name, arg_get) {
  let arg = arg_get();
  let fn_name_call = js_code_call_arg(f_name, arg);
  return fn_name_call;
}
