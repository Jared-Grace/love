import {js_parse_statement} from "./js_parse_statement.mjs";
import {js_code_return_empty} from "./js_code_return_empty.mjs";
export function js_return_empty() {
  let code = js_code_return_empty();
  let from = js_parse_statement(code);
  return from;
}
