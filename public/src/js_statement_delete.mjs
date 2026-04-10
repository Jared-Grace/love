import { js_block_find_remove } from "../../../love/public/src/js_block_find_remove.mjs";
import { js_block_find_from_node } from "../../../love/public/src/js_block_find_from_node.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function js_statement_delete(ast, nodes) {
  let first = list_first(nodes);
  let f = js_block_find_from_node(ast, first);
  js_block_find_remove(f);
}
