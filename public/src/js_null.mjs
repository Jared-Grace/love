import {js_parse_expression} from './js_parse_expression.mjs';
import {js_keyword_null} from './js_keyword_null.mjs';
export function js_null() {
  let init_code = js_keyword_null();
  let value = js_parse_expression(init_code);
  return value;
}
