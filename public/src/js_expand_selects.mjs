import { error } from "../../../love/public/src/error.mjs";
import { js_node_to_visitor } from "../../../love/public/src/js_node_to_visitor.mjs";
import { list_get_end_2 } from "../../../love/public/src/list_get_end_2.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_expand } from "../../../love/public/src/js_expand.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export async function js_expand_selects(ast, selects) {
  let first = list_single(selects);
  let v = js_node_to_visitor(ast, first);
  let stack = property_get(v, "stack");
  let stack1 = list_get_end_1(stack);
  let stack2 = list_get_end_2(stack);
  let index2 = error();
  let index = await js_expand(stack2, stack1, first, ast, index2);
}
