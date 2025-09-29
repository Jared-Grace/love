import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
export function js_call_insert(f_name, args_code, list, index) {
  let code = js_code_call_args(f_name, args_code);
  let parsed = js_parse_statement(code);
  list_insert(list, index, parsed);
}
