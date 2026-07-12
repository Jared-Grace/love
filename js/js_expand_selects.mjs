import { js_expand_generic } from "./js_expand_generic.mjs";
import { js_node_to_block } from "./js_node_to_block.mjs";
import { js_node_to_visitor } from "./js_node_to_visitor.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { property_get } from "./property_get.mjs";
import { list_single } from "./list_single.mjs";
export async function js_expand_selects(ast, selects) {
  let first = list_single(selects);
  let block = js_node_to_block(ast, first);
  let item = property_get(block, "item");
  let v = js_node_to_visitor(ast, item);
  let stack = property_get(v, "stack");
  let stack_2 = list_get_end_1(stack);
  let inserted = await js_expand_generic(item, stack_2, ast);
}
