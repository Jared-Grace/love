import { js_declaration_param_add } from "./js_declaration_param_add.mjs";
import { js_stack_last_function } from "./js_stack_last_function.mjs";
import { function_transform_marker } from "./function_transform_marker.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { data_function_current_get } from "./data_function_current_get.mjs";
export async function marker_param_add(param_name) {
  let f_name_current = await data_function_current_get();
  async function lambda2(la) {
    await function_transform_marker(f_name_current, lambda);
    async function lambda(a) {
      let f = js_stack_last_function(stack);
      js_declaration_param_add(f, param_name);
    }
  }
  let list = list_adder_async(lambda2);
  return list;
}
