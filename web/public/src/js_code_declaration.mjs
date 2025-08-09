import {js_code_call} from './js_code_call.mjs';
export function js_code_declaration(f_name) {
  return "function " + js_code_call(f_name) + "{}";
}
