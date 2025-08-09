import {js_code_declaration} from './js_code_declaration.mjs';
import {js_parse} from "./js_parse.mjs";
import {list_first} from "./list_first.mjs";
export function js_parse_statement(code) {
  let import_parsed = js_parse(code);
  let {body} = import_parsed;
  let statement = list_first(body);
  return statement;
  js_code_declaration('a');
}
