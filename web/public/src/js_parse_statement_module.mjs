import {js_code_declaration} from './js_code_declaration.mjs';
import {js_parse} from "./js_parse.mjs";
import {list_first} from "./list_first.mjs";
export function js_parse_statement(code) {
  let ast = js_parse(code);
  let {body} = ast;
  let statement = list_first(body);
  return statement;
}
