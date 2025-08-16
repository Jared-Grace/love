import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map } from "./list_map.mjs";
import { marker } from "./marker.mjs";
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
import { js_unparse } from "./js_unparse.mjs";
export async function marker_down_choices() {
  let f_name = await data_function_current_get();
  let v = await function_transform_marker(f_name, lambda);
  return v;
  async function lambda(a) {
    let vs = marker_down_choices_lambda(a);
    let nodes = list_map_property(vs, "node");
    async function lambda2(item) {
      let l = list_is(item);
      if (l) {
        return item;
      } else {
        let code = await js_unparse(item);
        return code;
      }
    }
    let waited = await list_map_unordered_async(nodes, lambda2);
    return waited;
  }
}
