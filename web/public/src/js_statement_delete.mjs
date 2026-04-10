import { log } from "../../../love/public/src/log.mjs";
import { js_visit_id_to_block_single } from "../../../love/public/src/js_visit_id_to_block_single.mjs";
import { js_block_find_remove } from "../../../love/public/src/js_block_find_remove.mjs";
export function js_statement_delete(ast, selects) {
  let f = js_visit_id_to_block_single(ast, selects);
  log(js_statement_delete.name, {
    f,
  });
  js_block_find_remove(f);
}
