import { js_call_named_find_alias } from "./js_call_named_find_alias.mjs";
import { js_node_to_block_item } from "./js_node_to_block_item.mjs";
export async function js_statement_find_call_named(ast, f_name) {
  ("A selector answers where, and nothing else. Printing what it found belongs to");
  ("whoever asked, because a selector is meant to sit inside a larger edit whose");
  ("own answer is the thing worth reading.");
  let only = await js_call_named_find_alias(ast, f_name);
  let item = js_node_to_block_item(ast, only);
  return item;
}
