import { js_await } from "./js_await.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_node_type_is_assert } from "./js_node_type_is_assert.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
export async function marker_next_await() {
  let f_name = await data_function_current_get();
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
  let list = list_adder_async(lambda2);
  return list;
}
