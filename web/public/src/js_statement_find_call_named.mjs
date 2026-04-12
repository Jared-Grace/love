import { js_node_to_block_item } from "../../../love/public/src/js_node_to_block_item.mjs";
import { js_call_named_find } from "../../../love/public/src/js_call_named_find.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function js_statement_find_call_named(ast, f_name) {
  let unaliased = await function_name_unalias_only(f_name);
  let only = js_call_named_find(ast, unaliased);
  let item = js_node_to_block_item(ast, only);
  return item;
}
