import { list_single } from "../../../love/public/src/list_single.mjs";
import { js_block_find_remove } from "../../../love/public/src/js_block_find_remove.mjs";
import { js_block_find_from_node } from "../../../love/public/src/js_block_find_from_node.mjs";
export function js_statement_delete(ast, nodes) {
  let first = list_single(nodes);
  let f = js_block_find_from_node(ast, first);
  js_block_find_remove(f);
}
