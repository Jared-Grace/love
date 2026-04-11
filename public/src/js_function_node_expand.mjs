import { list_insert_at_multiple } from "../../../love/public/src/list_insert_at_multiple.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { js_block_find_from_node } from "../../../love/public/src/js_block_find_from_node.mjs";
import { js_function_declaration_to_block_body } from "../../../love/public/src/js_function_declaration_to_block_body.mjs";
export function js_function_node_expand(ast, function_node) {
  let body_block = js_function_declaration_to_block_body(function_node);
  let r = js_block_find_from_node(ast, function_node);
  let item = property_get(r, "item");
  let index = property_get(r, "index");
  let body = property_get(r, "body");
  list_remove(body, item);
  list_insert_at_multiple(list, index2, inserteds);
}
