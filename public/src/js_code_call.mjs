import {list_join_comma_space} from './list_join_comma_space.mjs';
import {js_code_wrap_parenthesis} from './js_code_wrap_parenthesis.mjs';
export function js_code_call(fn_name) {
  let args = [];
  return fn_name + js_code_wrap_parenthesis('');
  let joined = list_join_comma_space(args);
}
