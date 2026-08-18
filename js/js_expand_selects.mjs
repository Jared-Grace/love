import { js_selects_block_item } from "./js_selects_block_item.mjs";
import { js_visit_above } from "./js_visit_above.mjs";
import { js_expand_generic } from "./js_expand_generic.mjs";
import { js_node_to_visitor } from "./js_node_to_visitor.mjs";
export async function js_expand_selects(ast, selects) {
  let item = js_selects_block_item(ast, selects);
  let v = js_node_to_visitor(ast, item);
  let stack_2 = js_visit_above(v);
  await js_expand_generic(item, stack_2, ast);
}
