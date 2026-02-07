import { list_swap_at } from "../../../love/public/src/list_swap_at.mjs";
import { function_param_index } from "../../../love/public/src/function_param_index.mjs";
import { function_params_new_generic } from "../../../love/public/src/function_params_new_generic.mjs";
export async function function_param_swap(param_name_a, param_name_b, f_name) {
  let index_a = null;
  let index_b = null;
  await function_params_new_generic(
    function_transform_current_lambda,
    on_call,
    f_name,
  );
  function on_call(args) {
    list_swap_at(args, index_a, index_b);
  }
  function function_transform_current_lambda(ast) {
    let params = null;
    ({ params, index: index_a } = function_param_index(ast, param_name_a));
    ({ index: index_b } = function_param_index(ast, param_name_b));
    list_swap_at(params, index_a, index_b);
  }
}
