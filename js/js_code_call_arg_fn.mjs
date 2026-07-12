import { js_code_call_arg } from "./js_code_call_arg.mjs";
import { fn_name } from "./fn_name.mjs";
export function js_code_call_arg_fn(fn_name, arg_get) {
  let arg = arg_get();
  let fn_name_call = js_code_call_arg(fn_name, arg);
  return fn_name_call;
}
