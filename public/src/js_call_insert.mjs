import { js_call } from "../../../love/public/src/js_call.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
export function js_call_insert(f_name, args_code, list, index) {
  let parsed = js_call(f_name, args_code);
  list_insert(list, index, parsed);
}
