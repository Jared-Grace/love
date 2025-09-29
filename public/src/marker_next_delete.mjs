import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
import { marker_next_index } from "../../../love/public/src/marker_next_index.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
export async function marker_next_delete() {
  let f_name = await function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name, lambda);
    function lambda(a) {
      let { index, stack2 } = marker_next_index(a);
      list_remove_at(stack2, index);
    }
  }
  let list = await list_adder_async(lambda2);
  return list;
}
