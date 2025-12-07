import { function_param_index } from "../../../love/public/src/function_param_index.mjs";
import { function_params_new_generic } from "../../../love/public/src/function_params_new_generic.mjs";
export async function function_param_move_generic(fn, param_name) {
  let index = null;
  await function_params_new_generic(function_transform_current_lambda, on_call);
  function on_call(args) {
    fn(args, index);
  }
  function function_transform_current_lambda(ast) {
    let params = null;
    ({ params, index } = function_param_index(ast, param_name));
    fn(params, index);
  }
}
