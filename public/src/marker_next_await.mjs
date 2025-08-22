import { list_adder_async } from "./list_adder_async.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function marker_next_await() {
  let f_name = await data_function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name, lambda);
    async function lambda(a) {
      let { next } = marker_next_get(a);
      la(await js_unparse(next));
    }
  }
  let list = list_adder_async(lambda2);
  return list;
}
