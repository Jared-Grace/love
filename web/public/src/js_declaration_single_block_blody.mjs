import {js_declaration_single} from './js_declaration_single.mjs';
export function js_declaration_single_block_blody(ast) {
  let declaration = js_declaration_single(ast);
  let {body} = declaration;
  let {body: body_block} = body;
  return body_block;
}
