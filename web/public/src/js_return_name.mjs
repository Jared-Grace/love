import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_declaration_single_block_blody } from "./js_declaration_single_block_blody.mjs";
import { js_declaration_single } from "./js_declaration_single.mjs";
export function js_return_name(ast) {
  let body_block = js_declaration_single_block_blody(ast);
  let name = null;
  if (list_empty_not_is(body_block)) {
  }
  return name;
}
