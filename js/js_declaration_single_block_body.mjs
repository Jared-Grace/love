import { marker } from "../../../love/public/src/marker.mjs";
import { js_declaration_to_block_body } from "../../../love/public/src/js_declaration_to_block_body.mjs";
import { js_declaration_single } from "../../../love/public/src/js_declaration_single.mjs";
export function js_declaration_single_block_body(ast) {
  marker("1");
  let declaration = js_declaration_single(ast);
  let body_block = js_declaration_to_block_body(declaration);
  return body_block;
}
