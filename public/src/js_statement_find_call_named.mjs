import { js_node_to_visitor } from "../../../love/public/src/js_node_to_visitor.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { js_call_named } from "../../../love/public/src/js_call_named.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function js_statement_find_call_named(ast, f_name) {
  let unaliased = await function_name_unalias_only(f_name);
  let only = js_call_named(ast, unaliased);
  let v = js_node_to_visitor(ast, only);
  let stack = property_get(v, "stack");
  let r = js_block_find(stack);
  let item = property_get(r, "item");
  return item;
}
