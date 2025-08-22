import { list_remove_at } from "./list_remove_at.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function marker_next_delete() {
  let f_name = await data_function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name, lambda);
    function lambda(a) {
      let { index, stack2 } = marker_next_index(a);
      list_remove_at(stack2, index);
    }
  }
  let list = list_adder_async(lambda2);
  return list;
}
