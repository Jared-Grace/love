import {js_code_wrap_parenthesis} from './js_code_wrap_parenthesis.mjs';
export function js_code_call(fn_name) {
  let args = [];
  let joined = list_join(args);
  return fn_name + js_code_wrap_parenthesis(joined);
}
