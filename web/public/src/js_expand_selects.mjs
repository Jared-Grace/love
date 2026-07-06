import { js_expand_generic } from "../../../love/public/src/js_expand_generic.mjs";
import { js_node_to_block } from "../../../love/public/src/js_node_to_block.mjs";
import { js_node_to_visitor } from "../../../love/public/src/js_node_to_visitor.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export async function js_expand_selects(ast, selects) {
  let first = list_single(selects);
  let block = js_node_to_block(ast, first);
  let item = property_get(block, "item");
  let v = js_node_to_visitor(ast, item);
  let stack = property_get(v, "stack");
  let stack2 = list_get_end_1(stack);
  let inserted = await js_expand_generic(item, stack2, ast);
}
