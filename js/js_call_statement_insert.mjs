import { js_call_statement } from "./js_call_statement.mjs";
import { list_insert } from "./list_insert.mjs";
export function js_call_statement_insert(f_name, args_code, list, index) {
  let parsed = js_call_statement(f_name, args_code);
  list_insert(list, index, parsed);
}
