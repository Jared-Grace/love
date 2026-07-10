import { js_code_call_arg } from "../../../love/public/src/js_code_call_arg.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export function js_code_call_arg_fn(next, fn_name) {
  let v3 = next();
  let fn_name_call = js_code_call_arg(fn_name, v3);
  return fn_name_call;
}
