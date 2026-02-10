import { js_call_new_insert } from "../../../love/public/src/js_call_new_insert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { marker_next_index } from "../../../love/public/src/marker_next_index.mjs";
export async function marker_call(f_name_call) {
  let f_name_current = await function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name_current, lambda);
    async function lambda(a) {
      let v = marker_next_index(a);
      let ast = property_get(v, "ast");
      let index = property_get(v, "index");
      let stack2 = property_get(v, "stack2");
      let stack = property_get(v, "stack");
      let parsed = await js_call_new_insert(
        f_name_call,
        ast,
        stack2,
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
