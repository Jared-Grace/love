import { js_block_to_body } from "../../../love/public/src/js_block_to_body.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_declaration_to_block_body(declaration) {
  let block = property_get(declaration, "body");
  let body_block = js_block_to_body(block);
  return body_block;
}
