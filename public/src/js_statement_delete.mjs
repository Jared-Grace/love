import { js_block_find_from_nodes_single } from "../../../love/public/src/js_block_find_from_nodes_single.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_block_find_remove } from "../../../love/public/src/js_block_find_remove.mjs";
export function js_statement_delete(ast, nodes) {
  let f = js_block_find_from_nodes_single(ast, nodes);
  log(js_statement_delete.name, {
    f,
  });
  js_block_find_remove(f);
}
