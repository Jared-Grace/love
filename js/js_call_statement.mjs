import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
export function js_call_statement(f_name, args_code) {
  let code = js_code_call_args(f_name, args_code);
  let parsed = js_parse_statement(code);
  return parsed;
}
