import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_node_type_is_assert } from "./js_node_type_is_assert.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
import { js_code_await } from "./js_code_await.mjs";
export async function marker_next_await() {
  let f_name = await data_function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name, lambda);
    async function lambda(a) {
      let { next } = marker_next_get(a);
      js_node_type_is_assert(next, "ExpressionStatement");
      let code_expression = js_code_await("a");
      let expression = js_parse_expression(code_expression);
      la(expression);
    }
  }
  let list = list_adder_async(lambda2);
  return list;
}
