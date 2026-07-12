import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_call_args_statement(f_name, args) {
  let code = js_code_call_args(f_name, args);
  let result = js_code_statement(code);
  return result;
}
