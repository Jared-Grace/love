import { list_insert } from "./list_insert.mjs";
import { js_prose_statement } from "./js_prose_statement.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { js_block_find_from_nodes_single } from "./js_block_find_from_nodes_single.mjs";
export function js_selects_prose_add_generic(
  ast,
  selects,
  sentence,
  index_delta,
) {
  let f = js_block_find_from_nodes_single(ast, selects);
  let body = property_get(f, "body");
  let index = property_get(f, "index");
  let index_insert = add(index, index_delta);
  let statement = js_prose_statement(sentence);
  list_insert(body, index_insert, value);
}
