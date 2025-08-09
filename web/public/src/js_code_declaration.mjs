import {js_code_call} from './js_code_call.mjs';
export function js_code_declaration(f_name,inside) {
  return "function " + js_code_call(f_name) + (js_code_wrap_braces(inside));
}
function js_code_wrap_braces(inside) {
    return "{" + inside + "}";
}

