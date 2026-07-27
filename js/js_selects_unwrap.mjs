import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_node_to_block_item } from "./js_node_to_block_item.mjs";
import { js_node_to_block } from "./js_node_to_block.mjs";
import { property_get } from "./property_get.mjs";
import { js_statement_inner_body } from "./js_statement_inner_body.mjs";
import { json_copy } from "./json_copy.mjs";
import { list_remove } from "./list_remove.mjs";
import { list_insert_at_multiple } from "./list_insert_at_multiple.mjs";
export function js_selects_unwrap(ast, selects) {
  arguments_assert(arguments, 2);
  ("Takes the lines out of a wrapper and leaves them where the wrapper stood. It");
  ("undoes the two verbs that make one — the test and the loop — so a wrap tried");
  ("and thought better of is one command back rather than a hand edit.");
  ("What it cannot undo is meaning: lines written to run under a test now run");
  ("always, and lines written to run once each now run once. Deciding that is the");
  ("reason this asks for nothing but the wrapper.");
  let node = list_single(selects);
  let item = js_node_to_block_item(ast, node);
  let f = js_node_to_block(ast, item);
  let body = property_get(f, "body");
  let index = property_get(f, "index");
  let held = js_statement_inner_body(item);
  let freed = json_copy(held);
  list_remove(body, item);
  list_insert_at_multiple(body, index, freed);
}
