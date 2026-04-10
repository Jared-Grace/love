import { js_block_body_to } from "../../../love/public/src/js_block_body_to.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_function_declaration_to_block_body(declaration) {
  let block = property_get(declaration, "body");
  let body_block = js_block_body_to(block);
  return body_block;
}
