import { js_node_to_block_item } from "./js_node_to_block_item.mjs";
import { js_expand_generic } from "./js_expand_generic.mjs";
import { js_node_to_visitor } from "./js_node_to_visitor.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { property_get } from "./property_get.mjs";
import { list_single } from "./list_single.mjs";
export async function js_expand_selects(ast, selects) {
  let first = list_single(selects);
  let item = js_node_to_block_item(ast, first);
  let v = js_node_to_visitor(ast, item);
  let stack = property_get(v, "stack");
  let stack_2 = list_get_end_1(stack);
  let inserted = await js_expand_generic(item, stack_2, ast);
}
