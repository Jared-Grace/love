import { js_parse_expression } from "../../../love/public/src/js_parse_expression.mjs";
import { js_keyword_null } from "../../../love/public/src/js_keyword_null.mjs";
export function js_null() {
  let init_code = js_keyword_null();
  let n = js_parse_expression(init_code);
  return n;
}
