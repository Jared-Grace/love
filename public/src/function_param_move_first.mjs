import { list_move_first } from "../../../love/public/src/list_move_first.mjs";
import { function_param_index } from "../../../love/public/src/function_param_index.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_params_new_generic } from "../../../love/public/src/function_params_new_generic.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function function_param_move_first(param_name) {
  marker("1");
  assert_arguments(arguments, 1);
  let fn = list_move_first;
  let index = null;
  await function_params_new_generic(function_transform_current_lambda, on_call);
  function on_call(args) {
    list_move_first(args, index);
  }
  function function_transform_current_lambda(ast) {
    let params = null;
    ({ params, index } = function_param_index(ast, param_name));
    list_move_first(params, index);
  }
}
