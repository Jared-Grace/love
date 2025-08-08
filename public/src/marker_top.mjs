import {marker} from './marker.mjs';
import {js_code_call} from './js_code_call.mjs';
import {log} from './log.mjs';
import {js_declaration_single} from './js_declaration_single.mjs';
import {function_parse} from './function_parse.mjs';
export async function marker_top(f_name) {
  let ast = await function_parse(f_name);
  let declaration = js_declaration_single(ast);
  let {body} = declaration;
  let {body: body2} = body;
  js_code_call(marker.name);
  log(declaration);
}
