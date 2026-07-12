import { js_call_new_insert } from "./js_call_new_insert.mjs";
import { property_get } from "./property_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { function_current_get } from "./function_current_get.mjs";
import { marker_next_index } from "./marker_next_index.mjs";
export async function marker_call(f_name_call) {
  let f_name_current = await function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name_current, lambda);
    async function lambda(a) {
      let v = marker_next_index(a);
      let ast = property_get(v, "ast");
      let index = property_get(v, "index");
      let stack_2 = property_get(v, "stack_2");
      let stack = property_get(v, "stack");
      let parsed = await js_call_new_insert(
        f_name_call,
        ast,
        stack_2,
        index,
        stack,
      );
      let output = await js_unparse(parsed);
      la(output);
    }
  }
  let list = await list_adder_async(lambda2);
  return list;
}
