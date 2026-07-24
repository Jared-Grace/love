import { list_clear } from "./list_clear.mjs";
import { list_single } from "./list_single.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
export function js_function_node_empty(ast, function_nodes) {
  let function_node = list_single(function_nodes);
  let body_block = js_function_declaration_to_block_body(function_node);
  list_clear(body_block);
}
