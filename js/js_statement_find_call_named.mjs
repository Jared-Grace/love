import { js_call_named_find_alias } from "./js_call_named_find_alias.mjs";
import { log } from "./log.mjs";
import { js_node_to_block_item } from "./js_node_to_block_item.mjs";
export async function js_statement_find_call_named(ast, f_name) {
  let only = await js_call_named_find_alias(ast, f_name);
  log(js_statement_find_call_named.name, {
    only,
  });
  let item = js_node_to_block_item(ast, only);
  return item;
}
