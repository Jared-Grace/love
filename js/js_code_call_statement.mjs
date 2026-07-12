import { js_code_call } from "./js_code_call.mjs";
import { js_code_statement } from "./js_code_statement.mjs";
export function js_code_call_statement(f_name) {
  let code = js_code_call(f_name);
  let result = js_code_statement(code);
  return result;
}
