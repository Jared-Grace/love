import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
export async function function_param_new(f_name, param_name, default_value) {
  arguments_assert(arguments, 3);
  await function_params_new(f_name, param_name, default_value);
}
