import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_block_to_body(block) {
  let value = property_get(block, "body");
  return value;
}
