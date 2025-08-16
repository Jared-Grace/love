import { list_size_1_assert_message } from "./list_size_1_assert_message.mjs";
import { list_size_1_assert } from "./list_size_1_assert.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { function_transform_marker_arg } from "./function_transform_marker_arg.mjs";
import { js_marker_named } from "./js_marker_named.mjs";
import { data_marker_current_get } from "./data_marker_current_get.mjs";
import { log } from "./log.mjs";
import { each } from "./each.mjs";
import { js_type } from "./js_type.mjs";
import { error } from "./error.mjs";
import { list_is } from "./list_is.mjs";
import { marker } from "./marker.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_is } from "./js_node_is.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { function_transform } from "./function_transform.mjs";
import { object_merge } from "./object_merge.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { json_to } from "./json_to.mjs";
export async function function_transform_marker(f_name, lambda$a) {
  let marker_name = await data_marker_current_get();
  let code = null;
  async function lambda2(la) {
    code = await function_transform(f_name, lambda_marker);
    async function lambda_marker(ast) {
      let visitors = js_type(ast, "CallExpression");
      async function lambda(v) {
        if (js_marker_named(v, marker_name)) {
          let a = function_transform_marker_arg(v, ast);
          la(await lambda$a(a));
        }
      }
      await each_async(visitors, lambda);
    }
  }
  let lines = await list_adder_async(lambda2);
  let message = json_to({
    f_name,
    marker_name,
    size: list_size(lines),
  });
  list_size_1_assert_message(lines, message);
  return code;
}
