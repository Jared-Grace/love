import { js_parse_statement } from "../../../love/public/src/js_parse_statement.mjs";
import { js_code_assign } from "../../../love/public/src/js_code_assign.mjs";
export function js_assign_default() {
  let code = js_code_assign("a", "a");
  let s = js_parse_statement(code);
  return s;
}
