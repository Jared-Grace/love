import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_declaration_to_block_body(declaration) {
  let block = property_get(declaration, "body");
  let body_block = property_get(block, "body");
  return body_block;
}
