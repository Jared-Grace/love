import { js_await } from "../../../love/public/src/js_await.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { property_set } from "../../../love/public/src/property_set.mjs";
import { js_node_type_is_assert } from "../../../love/public/src/js_node_type_is_assert.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { marker_next_get } from "../../../love/public/src/marker_next_get.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
export async function marker_next_await() {
  let f_name = await function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name, lambda);
    async function lambda(a) {
      let v = marker_next_get(a);
      let next = property_get(v, "next");
      js_node_type_is_assert(next, "ExpressionStatement");
      let expression = property_get(next, "expression");
      let awaited = js_await(expression);
      property_set(next, "expression", awaited);
      let code = js_unparse(next);
      la(code);
    }
  }
  let list = await list_adder_async(lambda2);
  return list;
}
