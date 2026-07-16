import { arguments_assert } from "./arguments_assert.mjs";
import { function_new_open_transform } from "./function_new_open_transform.mjs";
import { js_node_type_is_new_lambda } from "./js_node_type_is_new_lambda.mjs";
export async function js_node_type_is_new(f_name, node_type) {
  arguments_assert(arguments, 2);
  let lambda = js_node_type_is_new_lambda(f_name, node_type);
  await function_new_open_transform(f_name, lambda);
}
