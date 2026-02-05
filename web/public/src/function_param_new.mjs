import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
export async function function_param_new(f_name, param_name, default_value) {
  assert_arguments(arguments, 3);
  await function_params_new(f_name, param_name, default_value);
}
