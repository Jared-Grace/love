import { js_call_statement } from "../../../love/public/src/js_call_statement.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
export function js_call_insert(f_name, args_code, list, index) {
  let parsed = js_call_statement(f_name, args_code);
  list_insert(list, index, parsed);
}
