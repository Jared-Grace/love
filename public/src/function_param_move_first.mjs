import { list_add } from "../../../love/public/src/list_add.mjs";
import { function_param_index } from "../../../love/public/src/function_param_index.mjs";
import { list_remove_at } from "../../../love/public/src/list_remove_at.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_params_new_generic } from "../../../love/public/src/function_params_new_generic.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function function_param_move_first(param_name) {
  marker("1");
  assert_arguments(arguments, 1);
  let index = null;
  await function_params_new_generic(function_transform_current_lambda, on_call);
  function on_call(args) {
    list_remove_at(args, index);
  }
  function function_transform_current_lambda(ast) {
    let params = null;
    ({ params, index } = function_param_index(ast, param_name));
    list_remove_at(params, index);
    list_add(list, item);
  }
}
