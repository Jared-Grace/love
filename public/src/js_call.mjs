import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_code_call_args } from "../../../love/public/src/js_code_call_args.mjs";
export function js_call(f_name, args_code) {
  let code = js_code_call_args(f_name, args_code);
  let parsed = js_parse_statement(code);
  return parsed;
}
