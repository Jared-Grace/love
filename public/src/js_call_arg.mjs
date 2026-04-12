import { js_call_args } from "../../../love/public/src/js_call_args.mjs";
import { list_single_item } from "../../../love/public/src/list_single_item.mjs";
export function js_call_arg(code_string, callee_code) {
  let r3 = list_single_item(code_string);
  let parsed = js_call_args(callee_code, r3);
  return parsed;
}
