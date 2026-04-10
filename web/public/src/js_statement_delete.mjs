import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_block_find_from_node } from "../../../love/public/src/js_block_find_from_node.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function js_statement_delete(ast, nodes) {
  let first = list_first(nodes);
  let r = js_block_find_from_node(ast, first);
  let item = property_get(r, "item");
  let index = property_get(r, "index");
  let body = property_get(r, "body");
}
