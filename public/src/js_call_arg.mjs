import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { js_call_args } from "../../../love/public/src/js_call_args.mjs";
import { list_single_item } from "../../../love/public/src/list_single_item.mjs";
export function js_call_arg(code_string) {
  let r3 = list_single_item(code_string);
  let parsed = js_call_args(fn_name.name, r3);
  return parsed;
}
