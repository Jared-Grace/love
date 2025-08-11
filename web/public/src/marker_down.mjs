import { marker_next_get } from "./marker_next_get.mjs";
import { js_stack_list_block_is } from "./js_stack_list_block_is.mjs";
import { integer_to } from "./integer_to.mjs";
import { log } from "./log.mjs";
import { list_insert } from "./list_insert.mjs";
import { list_remove } from "./list_remove.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_is } from "./list_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function marker_down(delta) {
  let f_name = await data_function_current_get();
  await function_transform_marker(f_name, lambda);
  function lambda(a) {
    let { stack2, stack1, node, ast } = a;
    let nodes = list_adder((la) => {
      js_visit(ast, (v) => {
        let { node, stack } = v;
        if (js_stack_list_block_is(stack, 1)) {
          la(node);
        } else if (js_stack_list_block_is(stack, 0)) {
          if (list_empty_is(node)) {
            la(node);
          }
        }
      });
    });
    marker_next_get(a);
    log({
      nodes,
      stack1,
    });
    return;
    let index = list_index_of(stack2, stack1);
    list_remove(stack2, stack1);
    let index_new = index + integer_to(delta);
    list_insert(stack2, index_new, stack1);
  }
}
