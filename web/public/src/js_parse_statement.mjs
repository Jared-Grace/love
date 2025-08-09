import {js_code_declaration} from './js_code_declaration.mjs';
import {js_parse} from "./js_parse.mjs";
import {list_first} from "./list_first.mjs";
export function js_parse_statement(code) {
  let import_parsed = js_parse(js_code_declaration('a', code, true));
  let {body} = import_parsed;
  let declaration = list_first(body);
  let {body:block} = declaration;
  let {body:statements} = block;
  return list_first(statements);
}
