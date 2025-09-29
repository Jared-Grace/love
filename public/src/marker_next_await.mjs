import { marker } from "../../../love/public/src/marker.mjs";
import { js_await } from "../../../love/public/src/js_await.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { js_node_type_is_assert } from "../../../love/public/src/js_node_type_is_assert.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { marker_next_get } from "../../../love/public/src/marker_next_get.mjs";
import { function_transform_marker } from "../../../love/public/src/function_transform_marker.mjs";
import { function_current_get } from "../../../love/public/src/function_current_get.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
export async function marker_next_await() {
  marker("1");
  let f_name = await function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name, lambda);
    async function lambda(a) {
      let { next } = marker_next_get(a);
      js_node_type_is_assert(next, "ExpressionStatement");
      let expression = object_property_get(next, "expression");
      let awaited = js_await(expression);
      object_property_set(next, "expression", awaited);
      let code = js_unparse(next);
      la(code);
    }
  }
  let list = await list_adder_async(lambda2);
  return list;
}
