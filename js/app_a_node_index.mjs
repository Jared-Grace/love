import { list_index_of } from "./list_index_of.mjs";
import { list_next } from "./list_next.mjs";
import { list_filter_last } from "./list_filter_last.mjs";
import { js_stack_list_block_is } from "./js_stack_list_block_is.mjs";
import { list_index_of_end } from "./list_index_of_end.mjs";
import { js_visit_match } from "./js_visit_match.mjs";
import { property_get } from "./property_get.mjs";
export function app_a_node_index(a) {
  let ast = property_get(a, "ast");
  let node = property_get(a, "node");
  let v_match = js_visit_match(ast, node);
  let stack = property_get(v_match, "stack");
  function lambda(item) {
    let index_end = list_index_of_end(stack, item);
    let i = js_stack_list_block_is(stack, index_end);
    return i;
  }
  let list = list_filter_last(stack, lambda);
  let statement = list_next(stack, list);
  let index = list_index_of(list, statement);
  let v = {
    list,
    index,
    stack,
  };
  return v;
}
