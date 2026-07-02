import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_param_new_error_value_default } from "../../../love/public/src/function_param_new_error_value_default.mjs";
import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
export async function function_param_new_error(f_name, param_name) {
  arguments_assert(arguments, 2);
  let values_default_comma = function_param_new_error_value_default();
  await function_params_new(f_name, param_name, values_default_comma);
}
