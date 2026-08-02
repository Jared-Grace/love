import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_insert } from "./list_insert.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { js_block_find_from_nodes_single } from "./js_block_find_from_nodes_single.mjs";
export function js_selects_code_add_generic(ast, selects, code, index_delta) {
  "Writes one sentence of an account beside a chosen line in the block that line sits in";
  "Until this an account could only be written at the top of a block so a line explaining one step in the middle of a function was a hand edit every time";
  "The written value stays inside this family so the two commands standing on it carry only an address and a sentence";
  let f = js_block_find_from_nodes_single(ast, selects);
  let body = property_get(f, "body");
  let index = property_get(f, "index");
  ("Where that line sits in its block is what the two commands above shift by one or by nothing");
  let index_insert = add(index, index_delta);
  ("The sentence becomes a real statement here rather than a stripped comment which is why it survives the round trip");
  let statement = js_parse_statement(code);
  list_insert(body, index_insert, statement);
}
