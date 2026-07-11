import { list_empty } from "../../../love/public/src/list_empty.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_function_declaration_to_block_body } from "../../../love/public/src/js_function_declaration_to_block_body.mjs";
export function js_function_node_call(ast, function_nodes) {
  let function_node = list_single(function_nodes);
  let body_block = js_function_declaration_to_block_body(function_node);
  list_empty(body_block);
}
