import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_call_add_generic } from "../../../love/public/src/js_call_add_generic.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_function_declaration_to_block_body } from "../../../love/public/src/js_function_declaration_to_block_body.mjs";
export async function js_function_node_call(ast, function_nodes, f_name) {
  let function_node = list_single(function_nodes);
  let body_block = js_function_declaration_to_block_body(function_node);
  async function lambda(ast3, statement) {
    list_add(list, item);
  }
  await js_call_add_generic(ast, f_name, lambda);
}
