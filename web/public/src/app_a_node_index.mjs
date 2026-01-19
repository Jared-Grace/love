import { marker } from "../../../love/public/src/marker.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_next } from "../../../love/public/src/list_next.mjs";
import { list_filter_last } from "../../../love/public/src/list_filter_last.mjs";
import { js_stack_list_block_is } from "../../../love/public/src/js_stack_list_block_is.mjs";
import { list_index_of_end } from "../../../love/public/src/list_index_of_end.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_node_index(a) {
  marker("1");
  let ast = object_property_get(a, "ast");
  let node2 = object_property_get(a, "node");
  let v_match = js_visit_match(ast, node);
  let stack = object_property_get(v_match, "stack");
  function lambda3(item) {
    let index_end = list_index_of_end(stack, item);
    let i = js_stack_list_block_is(stack, index_end);
    return i;
  }
  let list = list_filter_last(stack, lambda3);
  let statement = list_next(stack, list);
  let index = list_index_of(list, statement);
  let v = {
    ast,
    list,
    index,
    stack,
  };
  return v;
}
