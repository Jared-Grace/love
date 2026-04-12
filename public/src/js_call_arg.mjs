import { js_call_args } from "../../../love/public/src/js_call_args.mjs";
import { list_single_item } from "../../../love/public/src/list_single_item.mjs";
export function js_call_arg(callee_code, code_arg) {
  let arg_list = list_single_item(code_arg);
  let parsed = js_call_args(callee_code, arg_list);
  return parsed;
}
