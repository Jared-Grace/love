import { list_size } from "./list_size.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { function_param_index } from "./function_param_index.mjs";
import { list_remove_at } from "./list_remove_at.mjs";
import { function_params_new_generic } from "./function_params_new_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_param_delete(f_name, param_name) {
  arguments_assert(arguments, 2);
  let index = null;
  await function_params_new_generic(
    function_transform_current_lambda,
    on_call,
    f_name,
  );
  function on_call(args) {
    "A caller that already hands over fewer arguments than the declaration asks";
    "for has nothing sitting at this position, and taking one from there fails on";
    "a list that is already short - so leave that call exactly as it stands. This";
    "is the shape arity mismatches come in, which is precisely when a parameter";
    "nobody passes is the one worth deleting.";
    let size = list_size(args);
    if (greater_than_equal(index, size)) {
      return;
    }
    list_remove_at(args, index);
  }
  function function_transform_current_lambda(ast) {
    let params = null;
    ({ params, index } = function_param_index(ast, param_name));
    list_remove_at(params, index);
  }
}
