import { js_node_to_visitor } from "../../../love/public/src/js_node_to_visitor.mjs";
import { js_function_declaration_to_block_body } from "../../../love/public/src/js_function_declaration_to_block_body.mjs";
export function js_function_node_expand(ast, function_node) {
  let body_block = js_function_declaration_to_block_body(function_node);
  let v = js_node_to_visitor(ast, body_block);
}
