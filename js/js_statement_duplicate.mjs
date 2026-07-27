import { js_block_find_from_nodes_single } from "./js_block_find_from_nodes_single.mjs";
import { js_visit_declarators_uniqueify } from "./js_visit_declarators_uniqueify.mjs";
import { list_insert } from "./list_insert.mjs";
import { json_copy } from "./json_copy.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
export function js_statement_duplicate(ast, nodes) {
  let r = js_block_find_from_nodes_single(ast, nodes);
  let item = property_get(r, "item");
  let index = property_get(r, "index");
  let body = property_get(r, "body");
  let copy = json_copy(item);
  js_visit_declarators_uniqueify(ast, copy);
  let index2 = add(index, 1);
  list_insert(body, index2, copy);
}
