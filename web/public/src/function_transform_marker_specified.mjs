import { list_size_1_assert_message } from "../../../love/public/src/list_size_1_assert_message.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_transform_marker_arg } from "../../../love/public/src/function_transform_marker_arg.mjs";
import { js_marker_named } from "../../../love/public/src/js_marker_named.mjs";
import { js_list_type } from "../../../love/public/src/js_list_type.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function function_transform_marker_specified(
  f_name,
  marker_name,
  lambda$a,
) {
  let code = null;
  async function lambda2(la) {
    code = await function_transform(f_name, lambda_marker);
    async function lambda_marker(ast) {
      let visitors = js_list_type(ast, "CallExpression");
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
