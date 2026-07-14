import { arguments_assert } from "../../love/js/arguments_assert.mjs";
import { function_params_new } from "../../love/js/function_params_new.mjs";
export async function function_param_new_double(f_name, param_name) {
  arguments_assert(arguments, 2);
  await function_params_new(f_name, param_name, param_name);
}
