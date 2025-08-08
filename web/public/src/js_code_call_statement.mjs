import {js_code_call} from './js_code_call.mjs';
import {js_code_statement} from './js_code_statement.mjs';
export function js_code_call_statement(f_name) {
  return js_code_statement(js_code_call(f_name));
}
