import { marker_down_choices_lambda } from "./marker_down_choices_lambda.mjs";
import { list_is_assert } from "./list_is_assert.mjs";
import { list_insert } from "./list_insert.mjs";
import { assert } from "./assert.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { list_add } from "./list_add.mjs";
import { list_is } from "./list_is.mjs";
import { list_get } from "./list_get.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { js_stack_list_block_is } from "./js_stack_list_block_is.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_adder } from "./list_adder.mjs";
import { list_remove } from "./list_remove.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { log } from "./log.mjs";
export async function marker_down_generic(delta_get) {
  let f_name = await data_function_current_get();
  await function_transform_marker(f_name, lambda);
  function lambda(a) {
    let { stack2, stack1 } = a;
    let { next } = marker_next_get(a);
    list_remove(stack2, stack1);
    let vs = marker_down_choices_lambda(a);
    log(vs);
    let nodes = list_map_property(vs, "node");
    let next_index = list_index_of(nodes, next);
    let index_new =
      next_index +
      delta_get({
        vs,
        next_index,
      });
    let v_new = list_get(vs, index_new);
    let { stack, node } = v_new;
    if (list_is(node)) {
      list_add(node, stack1);
    } else {
      let stack1_v_new = list_get_end(stack, 1);
      list_is_assert(stack1_v_new);
      let index = list_index_of(stack1_v_new, node);
      list_insert(stack1_v_new, index, stack1);
    }
  }
}
