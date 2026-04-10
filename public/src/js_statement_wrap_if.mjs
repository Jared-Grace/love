import { log } from "../../../love/public/src/log.mjs";
import { js_visit_id_to_node_first } from "../../../love/public/src/js_visit_id_to_node_first.mjs";
import { js_statement_if } from "../../../love/public/src/js_statement_if.mjs";
export function js_statement_wrap_if(ast, selects) {
  let node = js_visit_id_to_node_first(ast, selects);
  let from = js_statement_if();
  log(js_statement_wrap_if.name, {
    node,
    from,
  });
}
