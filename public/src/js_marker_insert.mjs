import {list_insert} from './list_insert.mjs';
import {js_parse_statement} from './js_parse_statement.mjs';
import {marker} from './marker.mjs';
import {js_code_call_args} from './js_code_call_args.mjs';
import {js_code_string} from './js_code_string.mjs';
export function js_marker_insert(name, list, index) {
  let code_string = js_code_string(name);
  let code = js_code_call_args(marker.name, [code_string]);
  let parsed = js_parse_statement(code);
  list_insert(list, index, parsed);
}
