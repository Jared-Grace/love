import { js_flo } from "./js_flo.mjs";
import { property_get } from "./property_get.mjs";
export function js_find_body_block(ast) {
  let declaration = js_flo(ast);
  let value = property_get(declaration, "body");
  return value;
}
