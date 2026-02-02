import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function js_declaration_to_block_body(declaration) {
  let block = object_property_get(declaration, "body");
  let body_block = object_property_get(block, "body");
  return body_block;
}
