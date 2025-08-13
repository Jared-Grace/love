import {list_insert} from './list_insert.mjs';
import {js_parse_statement} from './js_parse_statement.mjs';
import {js_code_call_args_await_maybe} from './js_code_call_args_await_maybe.mjs';
export function js_call_insert(f_name, args_code, list, index) {
  let code = js_code_call_args_await_maybe(f_name, args_code);
  let parsed = js_parse_statement(code);
  list_insert(list, index, parsed);
}
