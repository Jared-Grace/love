import { list_insert } from "./list_insert.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { js_block_find_from_nodes_single } from "./js_block_find_from_nodes_single.mjs";
export function js_selects_statement_add_generic(
  ast,
  selects,
  statement,
  index_delta,
) {
  "Writes one statement beside a chosen line in the block that line sits in";
  "The two families standing on this one differ in nothing but what they turn their written value into - one parses it as code and one quotes it as an account - so the finding of the block, the counting of the place and the writing itself all live here and neither of them holds a copy";
  let f = js_block_find_from_nodes_single(ast, selects);
  let body = property_get(f, "body");
  let index = property_get(f, "index");
  ("Where that line sits in its block is what the two commands above shift by one or by nothing");
  let index_insert = add(index, index_delta);
  list_insert(body, index_insert, statement);
}
