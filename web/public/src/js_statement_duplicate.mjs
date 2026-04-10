import { js_visit_id_to_node_first } from "../../../love/public/src/js_visit_id_to_node_first.mjs";
import { js_visit_declarators_uniqueify } from "../../../love/public/src/js_visit_declarators_uniqueify.mjs";
import { list_insert } from "../../../love/public/src/list_insert.mjs";
import { json_copy } from "../../../love/public/src/json_copy.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { js_node_to_visitor } from "../../../love/public/src/js_node_to_visitor.mjs";
export function js_statement_duplicate(ast, selects) {
  let node = js_visit_id_to_node_first(selects, ast);
  let v = js_node_to_visitor(ast, node);
  let stack = property_get(v, "stack");
  let r = js_block_find(stack);
  let item = property_get(r, "item");
  let index = property_get(r, "index");
  let body = property_get(r, "body");
  let copy = json_copy(item);
  js_visit_declarators_uniqueify(ast, copy);
  list_insert(body, index + 1, copy);
}
