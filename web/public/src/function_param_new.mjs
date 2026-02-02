import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_params_new } from "../../../love/public/src/function_params_new.mjs";
export async function function_param_new(f_name, param_name, default_value) {
  assert_arguments(arguments, 3);
  marker("1");
  await function_params_new(param_name, default_value, f_name);
}
