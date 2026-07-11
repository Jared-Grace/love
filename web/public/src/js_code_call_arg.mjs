import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
export function js_code_call_arg(fn_name, v) {
  let code = js_code_call_args(fn_name, [v]);
  return code;
}
