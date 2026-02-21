import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
export function js_code_call(fn_name) {
  let args = [];
  let result = js_code_call_args(fn_name, args);
  return result;
}
