import { list_single } from "./list_single.mjs";
import { list_insert_at_multiple } from "./list_insert_at_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_remove } from "./list_remove.mjs";
import { js_node_to_block } from "./js_node_to_block.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
export function js_function_node_unwrap(ast, function_nodes) {
  let function_node = list_single(function_nodes);
  let body_block = js_function_declaration_to_block_body(function_node);
  let r = js_node_to_block(ast, function_node);
  let item = property_get(r, "item");
  let index = property_get(r, "index");
  let body = property_get(r, "body");
  list_remove(body, item);
  list_insert_at_multiple(body, index, body_block);
}
