import {log} from './log.mjs';
import {js_declaration_single} from './js_declaration_single.mjs';
import {function_parse} from './function_parse.mjs';
export function marker_top(f_name) {
  let ast = function_parse(f_name);
  let declaration = js_declaration_single(ast);
  log(declaration);
}
