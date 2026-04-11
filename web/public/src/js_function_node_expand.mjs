import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { js_block_find_from_node } from "../../../love/public/src/js_block_find_from_node.mjs";
import { js_function_declaration_to_block_body } from "../../../love/public/src/js_function_declaration_to_block_body.mjs";
export function js_function_node_expand(ast, function_node) {
  let body_block = js_function_declaration_to_block_body(function_node);
  let f = js_block_find_from_node(ast, function_node);
  list_remove(list, item);
}
